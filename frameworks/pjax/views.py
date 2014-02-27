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
    
    # make a call to the badge api
    badge_json = urllib.urlopen('http://localhost:8001/api/v1/badges?format=json').read()
    encoded = json.loads(badge_json)
    
    # turn the json into a python dict
        
    return render_to_response(template_name, {'encoded' : encoded }, context_instance=RequestContext(request))