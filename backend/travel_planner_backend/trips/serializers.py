from trips.models import UserTrip
from rest_framework import serializers


class UserTripSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTrip
        fields = 'user', 'name', 'description', 'transport_type', 'from_city', 'to_city', 'start_date', 'end_date'
        read_only_fields = 'user'
        