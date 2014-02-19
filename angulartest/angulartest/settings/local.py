# dev settings

from angulartest.settings.base import *

# STATIC_ROOT is required as of Django 1.6.2
# This should be a real apache served location if you're using Apache.
STATIC_ROOT = '/tmp/'

# django compressor and less-c compiler

COMPRESS_OFFLINE = False
COMPRESS_ENABLED = False
