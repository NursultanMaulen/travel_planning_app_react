from django.urls import path, include
from rest_framework.routers import DefaultRouter
from places.views import CityViewSet, CountryViewSet, HotelViewSet, PlaceCategoryViewSet, PlaceViewSet

router = DefaultRouter()
router.register(r'places-categories', PlaceCategoryViewSet, basename='place-category')
router.register(r'countries', CountryViewSet, basename='country')
router.register(r'cities', CityViewSet, basename='city')
router.register(r'places', PlaceViewSet, basename='place')
router.register(r'hotels', HotelViewSet, basename='hotel')

urlpatterns = [
    path('', include(router.urls)),
]