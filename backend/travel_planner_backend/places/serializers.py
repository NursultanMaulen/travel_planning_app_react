from rest_framework import serializers

from places.models import PlaceCategory

class PlaceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceCategory
        fields = ('name', 'description')

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceCategory
        fields = ('name',)

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceCategory
        fields = ('name', 'country')

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceCategory
        fields = ('name', 'description', 'city', 'category')

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceCategory
        fields = ('name', 'description', 'city', 'stars')