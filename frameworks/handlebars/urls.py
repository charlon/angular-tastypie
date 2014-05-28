from django.conf.urls import patterns, include, url

# direct all routes through the default view
urlpatterns = patterns('',
    
    # routing for pjax app
    
    # /handlebars/about
    url(r'^/about', 'handlebars.views.about'),
    
    # /handlebars/test
    url(r'^/test', 'handlebars.views.test'),
    
    # /handlebars/badges
    url(r'^/badges', 'handlebars.views.badges'),
    
    # /handlebars/anything
    url(r'^', 'handlebars.views.index'),
    
)
