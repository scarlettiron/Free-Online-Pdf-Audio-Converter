from django.urls import path
from . import views as v

urlpatterns = [
    path('template/', v.converter_engine_home, name="template-version"),
    
]
