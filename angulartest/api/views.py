from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

# Create your views here.
def hello(request, template_name="hello.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
def veeone(request, template_name="world.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))