from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for ember app
    
    # /ember/anything
    url(r'^', 'ember.views.index'),
    
)
