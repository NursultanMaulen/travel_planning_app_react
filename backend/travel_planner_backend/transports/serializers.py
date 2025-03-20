from asyncio import Transport
from rest_framework import serializers

class TransportTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transport
        fields = ('name', 'description')