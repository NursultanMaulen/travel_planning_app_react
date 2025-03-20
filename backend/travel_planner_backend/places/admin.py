from django.contrib import admin

from places.models import City, Country, Hotel, Place, PlaceCategory

admin.site.register(Place)
admin.site.register(PlaceCategory)
admin.site.register(Country)
admin.site.register(City)
admin.site.register(Hotel)
