from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

import urllib
import json


# handle page views

def index(request):
    return render_to_response('turbo/index.html', context_instance=RequestContext(request))

def about(request):
    return render_to_response('turbo/about.html', context_instance=RequestContext(request))
    
def test(request):
    return render_to_response('turbo/test.html', context_instance=RequestContext(request))

def badges(request):
    return render_to_response('turbo/badges.html', context_instance=RequestContext(request))


# handle partial views

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
            
    # turn the json into a python dict
    return render_to_response('turbo/partials/badgelist.html', {'badges' : badges, 'nextpage' : nextpage }, context_instance=RequestContext(request))
