from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    
    # main project url routing
    
     # include the app "/stampos"
    url(r'^stampos', include('stampos.urls')),
        
    # include the anglue app "/angular"
    url(r'^angular', include('angular.urls')),
    
    # include the pjax app "/pjax"
    url(r'^pjax', include('pjax.urls')),
    
    # / and /anything
    url(r'^', 'frameworks.views.index'),
    
)
