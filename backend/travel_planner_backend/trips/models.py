from django.db import models

from core.models import TimeStampedModel
from places.models import City
from transports.models import TransportType
from users.models import User


class UserTrip(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_trips')
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    transport_type = models.ForeignKey(TransportType, on_delete=models.CASCADE, related_name='user_trips')
    from_city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='from_user_trips')
    to_city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='to_user_trips')
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name