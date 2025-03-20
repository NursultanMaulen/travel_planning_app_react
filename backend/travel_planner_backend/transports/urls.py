from django.urls import include, path

from transports.views import TransportTypeViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'transport-types', TransportTypeViewSet, basename='transport-type')

urlpatterns = [
    path('', include(router.urls)),
]