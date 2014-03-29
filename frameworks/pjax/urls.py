from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for pjax app
    
    # /pjax/about
    url(r'^/about', 'pjax.views.about'),
    
    # /pjax/test
    url(r'^/test', 'pjax.views.test'),
    
    # /pjax/badges
    url(r'^/badges', 'pjax.views.badges'),
    
    # /pjax/badgelist
    url(r'^/badgelist', 'pjax.views.badgelist'),
    
    # /pjax/anything
    url(r'^', 'pjax.views.index'),
    
)
