from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for angular app
    
    # /backbone/anything
    url(r'^', 'backbone.views.index'),
    
)
