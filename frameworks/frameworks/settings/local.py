# dev settings

from frameworks.settings.base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
INTERNAL_IPS = (
    '127.0.0.1',
    '128.208.33.32', # curry.eplt.washington.edu
)
TEMPLATE_DEBUG = True
ALLOWED_HOSTS = []

# STATIC_ROOT is required as of Django 1.6.2
# This should be a real apache served location if you're using Apache.
STATIC_ROOT = '/tmp/'

# django compressor and less-c compiler (uses LessJS for pre-compilation)
#COMPRESSOR SETTINGS
COMPRESS_PRECOMPILERS = (('text/less', 'lessc {infile} {outfile}'),)
COMPRESS_ENABLED = True # True if you want to compress your development build
COMPRESS_OFFLINE = False # True if you want to compress your build offline
COMPRESS_OUTPUT_DIR = ''