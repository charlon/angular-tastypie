from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

# Create your views here.

def index(request, template_name="hybrid/index.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))

def about(request, template_name="hybrid/about.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
def test(request, template_name="hybrid/test.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))

def badges(request, template_name="hybrid/badges.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))