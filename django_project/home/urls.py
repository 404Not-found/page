from django.urls import path, include
from .views import landing

app_name = 'home'
urlpatterns = []

urlpatterns += [
    path('',landing, name='landing'),
]