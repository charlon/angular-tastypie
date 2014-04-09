from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

import urllib
import json


# create your views here

def index(request):
    return render_to_response('pjax/index.html', context_instance=RequestContext(request))

def about(request):
    return render_to_response('pjax/about.html', context_instance=RequestContext(request))
    
def test(request):
    return render_to_response('pjax/test.html', context_instance=RequestContext(request))

def badges(request):
    return render_to_response('pjax/badges.html', context_instance=RequestContext(request))

# separate view to handle the badgelist template
def badgelist(request):
    
    # get the json url to load
    page = request.GET.get('url', None)
     
    #badge_url = 'http://' + request.get_host() + '/api/v1/badges?format=json&page=' + page;
    badge_url = page
    
    # make a call to the badge api
    badge_json = urllib.urlopen(badge_url).read()
    
    data = json.loads(badge_json)
    badges = data["results"]
    
    nextpage = data["next"]
    
    print data["next"]
        
    # turn the json into a python dict
    return render_to_response('pjax/partials/badgelist.html', {'badges' : badges, 'nextpage' : nextpage }, context_instance=RequestContext(request))
