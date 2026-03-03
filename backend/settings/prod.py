# prod.py
from .base import *

DEBUG = False

ALLOWED_HOSTS = [
    "hrms-lite-lizn.onrender.com",
]

DATABASES = {
    'default': {
        "ENGINE": os.environ.get("DB_ENGINE"),
        "NAME": os.environ.get("DB_NAME"),
        "USER": os.environ.get("DB_USER"),
        "PASSWORD": os.environ.get("DB_PASSWORD"),
        "HOST": os.environ.get("DB_HOST", "localhost"),
        "PORT": os.environ.get("DB_PORT", "5432"),
    }
}

CORS_ALLOW_ALL_ORIGINS = False

CORS_ALLOWED_ORIGINS = [
    "https://hrms-lite-delta-ten.vercel.app/"
]