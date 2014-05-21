from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for turbolinks app
    
    # /turbolinks/about
    url(r'^/about', 'turbo.views.about'),
    
    # /turbolinks/test
    url(r'^/test', 'turbo.views.test'),
    
    # /turbolinks/badges
    url(r'^/badges', 'turbo.views.badges'),
    
    # /turbolinks/partials/badgelist
    url(r'^/partials/badgelist', 'turbo.views.badgelist'),
    
    # /turbolinks/anything
    url(r'^', 'turbo.views.index'),
    
)
