from django.conf.urls import patterns, include, url

#from django.contrib import admin
#admin.autodiscover()


# direct all routes through the default view
urlpatterns = patterns('',
    url(r'', 'client.views.home'),
)
