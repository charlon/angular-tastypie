frameworks-comparison
====================

Django project that serves a REST API using Tastypie. For the clients, a comparison of various client-side js applications that consumes the API. Going to enable PushState across all the comparison apps.

Installation
------------

**Github**

    $ git clone git@github.com:charlon/frameworks-comparison.git

**Virtualenv:**

Turn the cloned repository into a virtualenv.

    $ virtualenv frameworks-comparison
    $ cd frameworks-comparison
    $ source bin/activate

**Dependencies:**

Install the requirements

    $ cd frameworks
    $ pip install -r requirements.txt
    
Server
------

Export settings (for each terminal - for now)

    $ export DJANGO_SETTINGS_MODULE=frameworks.settings.local
    
Run server (using local settings):

    $ python manage.py runserver 0.0.0.0:8000
