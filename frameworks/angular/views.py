from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

# Create your views here.
def home(request, template_name="index.html"):
    """
    A index view.
    """
    return render_to_response(template_name, context_instance=RequestContext(request))