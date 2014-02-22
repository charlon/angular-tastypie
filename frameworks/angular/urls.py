from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for js app
    
    # matchin anything after / and route through the angular client app
    url(r'^', 'angular.views.home'),
    
)
