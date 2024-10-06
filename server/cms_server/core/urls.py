from django.urls import path 
from core.views.index import *


urlpatterns = [
    path('', index, name='index'),
]

