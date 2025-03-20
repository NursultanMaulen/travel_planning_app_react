from django.urls import include, path

from trips.views import UserTripViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'user-trips', UserTripViewSet, basename='transport-type')

urlpatterns = [
    path('', include(router.urls)),
]