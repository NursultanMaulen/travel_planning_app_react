from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import TransportType
from .serializers import TransportTypeSerializer

class TransportTypeViewSet(viewsets.ModelViewSet):
    queryset = TransportType.objects.all()
    serializer_class = TransportTypeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
