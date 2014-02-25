from django.conf.urls import patterns, include, url

#from django.contrib import admin
#admin.autodiscover()
from rest_framework.urlpatterns import format_suffix_patterns
from stampos import views

urlpatterns = patterns('',
        
    # /stampos/api/v1/badge 
    url(r'^/api/v1/badge', views.BadgeList.as_view(), name='badge-list'),
    
)

urlpatterns = format_suffix_patterns(urlpatterns)
