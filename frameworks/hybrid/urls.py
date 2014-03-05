from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for pjax app
    
    # /pjax/about
    url(r'^/about', 'hybrid.views.about'),
    
    # /pjax/test
    url(r'^/test', 'hybrid.views.test'),
    
    # /pjax/badges
    url(r'^/badges', 'hybrid.views.badges'),
    
    # /pjax/anything
    url(r'^', 'hybrid.views.index'),
    
)
