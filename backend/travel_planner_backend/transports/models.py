from django.db import models

from core.models import TimeStampedModel

class TransportType(TimeStampedModel):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)