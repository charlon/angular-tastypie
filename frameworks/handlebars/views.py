from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

import urllib
import json


# Create your views here.

def index(request, template_name="handlebars/index.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))

def about(request, template_name="handlebars/about.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
def test(request, template_name="handlebars/test.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
# let's figure this REST stuff out

def badges(request):
    return render_to_response('handlebars/badges.html', context_instance=RequestContext(request))


# handle partial (handlebars template) views

def badgelist(request):
    
    # get the json url to load
    page = request.GET.get('url', None)
     
    #badge_url = 'http://' + request.get_host() + '/api/v1/badges?format=json&page=' + page;
    badge_url = page
    
    # make a call to the badge api
    badge_json = urllib.urlopen(badge_url).read()
    
    data = json.loads(badge_json)
    badges = json.dumps(data["results"])
    
    nextpage = data["next"]
            
    # turn the json into a python dict
    return render_to_response('handlebars/partials/badgelist.html', {'badges' : badges, 'nextpage' : nextpage }, context_instance=RequestContext(request))
