from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

import urllib
import json


# create your views here

def index(request, template_name="pjax/index.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))

def about(request, template_name="pjax/about.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
def test(request, template_name="pjax/test.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))

# let's figure this REST stuff out

  
def badges(request, template_name="pjax/badges.html"):
    
    # get the json url for badges
    badge_url = 'http://' + request.get_host() + '/api/v1/badges?format=json';
    
    # make a call to the badge api
    badge_json = urllib.urlopen(badge_url).read()
    
    # turn the json into a python object
    badge_object = json.loads(badge_json)
       
    return render_to_response(template_name, {'badges' : badge_object }, context_instance=RequestContext(request))

'''
def badges(request, template_name="pjax/badges.html"):
    
    # get the json url for badges
    badge_url = 'http://' + request.get_host() + '/api/v1/badges?format=json';
    
    # make a call to the badge api
    badge_json = urllib.urlopen(badge_url).read()
    
    # pass the badge json to the template as a badges object       
    return render_to_response(template_name, {'badges' : badge_json }, context_instance=RequestContext(request))
    #return render_to_response(template_name, context_instance=RequestContext(request))
'''