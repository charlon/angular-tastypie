from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response

# Create your views here.
def index(request, template_name="backbone/index.html"):
    return render_to_response(template_name, context_instance=RequestContext(request))