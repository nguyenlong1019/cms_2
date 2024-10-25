from django.urls import path 
from core.views.index import *


urlpatterns = [
    path('', index, name='index'),
    path('api/auth/login', login_view, name='login'),
    path('api/auth/logout', logout_view, name='logout'),
]

