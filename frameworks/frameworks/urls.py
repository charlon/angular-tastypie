from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    
    # main project url routing
    
     # route /api/v1 calls to the stampos app
    url(r'^api/v1', include('stampos.urls')),
        
    # route /angular calls to the angular app
    url(r'^angular', include('angular.urls')),
    
    # route /angular calls to the angular app
    #url(r'^backbone', include('backbone.urls')),
    
    # route /angular calls to the angular app
    url(r'^hybrid', include('hybrid.urls')),
    
    # route /pjax calls to the pjax app
    url(r'^pjax', include('pjax.urls')),
    
    # route / to the default index view
    url(r'^', 'frameworks.views.index'),
    
)
