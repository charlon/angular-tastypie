from django.conf.urls import patterns, include, url

#from django.contrib import admin
#admin.autodiscover()

# example api routes
urlpatterns = patterns('',
    
    # mocked api routing 
    
    # /api/
    url(r'^$', 'api.views.hello'),
    
    # /api/v1/
    url(r'^v1/', 'api.views.world'),
    
    
)
