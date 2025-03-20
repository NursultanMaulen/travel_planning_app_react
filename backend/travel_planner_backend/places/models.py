from django.db import models

from core.models import TimeStampedModel

class PlaceCategory(TimeStampedModel):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)


class Country(TimeStampedModel):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name
    
class City(TimeStampedModel):
    name = models.CharField(max_length=255)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='cities')

    def __str__(self):
        return self.name
    
class Place(TimeStampedModel):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='places')
    category = models.ForeignKey(PlaceCategory, on_delete=models.CASCADE, related_name='places')

    def __str__(self):
        return self.name
    
class Hotel(TimeStampedModel):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='hotels')
    stars = models.IntegerField(choices=[
        (1, '1 star'),
        (2, '2 stars'),
        (3, '3 stars'),
        (4, '4 stars'),
        (5, '5 stars'),
    ])

    def __str__(self):
        return self.name + self.stars