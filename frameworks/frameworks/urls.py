from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    
    # main project url routing
    
     # include the api app "/api"
    url(r'^api', include('api.urls')),
        
    # include the anglue app "/angular"
    url(r'^angular', include('angular.urls')),
    
    # include the pjax app "/pjax"
    url(r'^pjax', include('pjax.urls')),
    
    # / and /anything
    url(r'^', 'frameworks.views.index'),
    
)
