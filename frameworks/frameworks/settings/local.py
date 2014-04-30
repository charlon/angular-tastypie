# dev settings

from frameworks.settings.base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
INTERNAL_IPS = (
    '127.0.0.1',
)
TEMPLATE_DEBUG = True
ALLOWED_HOSTS = []

# STATIC_ROOT is required as of Django 1.6.2
# This should be a real apache served location if you're using Apache.
STATIC_ROOT = '/tmp/'

# django compressor and less-c compiler (uses LessJS for pre-compilation)
COMPRESS_OFFLINE = False
COMPRESS_ENABLED = False