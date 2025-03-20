from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from trips.models import UserTrip
from trips.serializers import UserTripSerializer

class UserTripViewSet(viewsets.ModelViewSet):
    queryset = UserTrip.objects.all().order_by('id')
    serializer_class = UserTripSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]