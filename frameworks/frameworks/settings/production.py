#production settings

from frameworks.settings.base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
TEMPLATE_DEBUG = False
ALLOWED_HOSTS = ['localhost']

# STATIC_ROOT is required as of Django 1.6.2
# This should be a real apache served location if you're using Apache.
STATIC_ROOT = None

# django compressor and less-c compiler (compiles Less using LessC and translates url() paths)

# run...
# python manage.py collectstatic
# python manage.py compress

COMPRESS_OFFLINE = True
COMPRESS_ENABLED = True
COMPRESS_PRECOMPILERS = (('text/less', 'lessc {infile} {outfile}'),)
COMPRESS_CSS_FILTERS = ['compressor.filters.css_default.CssAbsoluteFilter']
