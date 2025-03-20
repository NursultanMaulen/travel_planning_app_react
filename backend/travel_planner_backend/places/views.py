from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from places.models import PlaceCategory
from places.serializers import PlaceCategorySerializer

class PlaceCategoryViewSet(viewsets.ModelViewSet):
    queryset = PlaceCategory.objects.all()
    serializer_class = PlaceCategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class CountryViewSet(viewsets.ModelViewSet):
    queryset = PlaceCategory.objects.all()
    serializer_class = PlaceCategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class CityViewSet(viewsets.ModelViewSet):
    queryset = PlaceCategory.objects.all()
    serializer_class = PlaceCategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class PlaceViewSet(viewsets.ModelViewSet):
    queryset = PlaceCategory.objects.all()
    serializer_class = PlaceCategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class HotelViewSet(viewsets.ModelViewSet):
    queryset = PlaceCategory.objects.all()
    serializer_class = PlaceCategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
