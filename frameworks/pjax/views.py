from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

# Create your views here.
def index(request, template_name="pjax/index.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))

# Create your views here.
def about(request, template_name="pjax/about.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
# Create your views here.
def test(request, template_name="pjax/test.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))