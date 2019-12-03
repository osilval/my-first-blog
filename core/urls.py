from django.urls import path
from .views import home, nosotros, carta, contactanos

urlpatterns = [
    path('', home, name='home'),
    path('nosotros/', nosotros, name='nosotros'),
    path('carta/', carta, name='carta'),
    path('contactanos/', contactanos, name='contactanos'),
]
