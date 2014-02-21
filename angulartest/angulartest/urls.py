from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    
    # main project url routing
    
     # include the api app "/api/"
    url(r'^api/', include('api.urls')),
        
    # include the client app "/"
    url(r'^', include('client.urls')),
    
    
)
