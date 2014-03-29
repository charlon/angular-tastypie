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

# let's figure this REST stuff out

  
def badges(request):
    
    # get the json url for badges
    badge_url = 'http://' + request.get_host() + '/api/v1/badges?format=json';
    
    # make a call to the badge api
    badge_json = urllib.urlopen(badge_url).read()
    
    # turn the json into a python object
    #badge_object = json.dumps(badge_json)
       
    return render_to_response('pjax/badges.html', {'badges' : badge_json }, context_instance=RequestContext(request))