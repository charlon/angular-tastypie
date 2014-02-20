angular-tastypie
================

Django project that serves a REST API using Tastypie. For the client, an Angular.js application consumes the API. It only made sense to ditch the Backbone/Handlebars architecture since Angular is more robust and much more lightweight. Going to enable PushState working as well with the routing.

Server
------

Export settings (for each terminal - for now)

    $ export DJANGO_SETTINGS_MODULE=angulartest.settings.local
    
Run server (using local settings):

    $ python manage.py runserver 0.0.0.0:8000
