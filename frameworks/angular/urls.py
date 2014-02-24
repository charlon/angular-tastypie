from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for angular app
    
    # /angular/anything
    url(r'^', 'angular.views.index'),
    
)
