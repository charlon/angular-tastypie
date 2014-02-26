from django.conf.urls import patterns, include, url

#from django.contrib import admin
#admin.autodiscover()
from rest_framework.urlpatterns import format_suffix_patterns
from stampos import views

urlpatterns = patterns('',
        
    # /stampos/api/v1/badges 
    url(r'^/badges$', views.BadgeList.as_view(), name='badge-list'),
    
    # /stampos/api/v1/badges/:id
    url(r'^/badges/(?P<pk>[0-9]+)', views.BadgeDetail.as_view(), name='badge-detail'),
    
)

urlpatterns = format_suffix_patterns(urlpatterns)
