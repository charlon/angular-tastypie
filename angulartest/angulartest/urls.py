from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
        
    # include the client app "/"
    url(r'^', include('client.urls')),
    
     # include the api app "/api/"
    url(r'^api/', include('api.urls')),
    
     
)
