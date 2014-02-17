#production settings

from djangular.settings.base import *

# STATIC_ROOT is required as of Django 1.6.2
# This should be a real apache served location if you're using Apache.
STATIC_ROOT = None

# django compressor and less-c compiler

COMPRESS_OFFLINE = True
COMPRESS_ENABLED = True
