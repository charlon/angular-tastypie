from django.conf.urls import patterns, include, url

#from django.contrib import admin
#admin.autodiscover()

# example api routes
urlpatterns = patterns('',
    url(r'', 'api.views.home'),
)
