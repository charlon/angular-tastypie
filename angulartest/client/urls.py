from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',

    url(r'^', 'client.views.home'),
    
)
