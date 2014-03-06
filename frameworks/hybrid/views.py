from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

import urllib
import json


# Create your views here.

def index(request, template_name="hybrid/index.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))

def about(request, template_name="hybrid/about.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
def test(request, template_name="hybrid/test.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
# let's figure this REST stuff out
    
def badges(request, template_name="hybrid/badges.html"):
    
    # get the json url for badges
    badge_url = 'http://' + request.get_host() + '/api/v1/badges?format=json';
    
    # make a call to the badge api
    badge_json = urllib.urlopen(badge_url).read()
    
    # turn the json into a python object
    badges_list = json.dumps(badge_json)
       
    return render_to_response(template_name, {'badges' : badges_list, 'url': badge_url }, context_instance=RequestContext(request))