from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for js app
    url(r'^', 'client.views.home'),
    
)
