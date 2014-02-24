from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

# Create your views here.
def app(request, template_name="pjax.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))

# Create your views here.
def about(request, template_name="about.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))
    
# Create your views here.
def test(request, template_name="test.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))