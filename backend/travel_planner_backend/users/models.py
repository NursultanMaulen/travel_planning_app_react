from django.db import models
import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _

from core.models import TimeStampedModel


class UserManager(BaseUserManager):
    def create_user(self, email, password, first_name="", last_name="", **other_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, **other_fields)

        if password:
            user.set_password(password)
        
        user.save()
        return user
    
    def create_superuser(self, email, password, **other_fields): 
        other_fields.setdefault("is_active", True)
        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)

        return self.create_user(email=email, password=password, **other_fields)
    
    def get_by_natural_key(self, email):
        """
        required func: adds Django's authentication system to find users based on email or username.
        """
        return self.get(email=email)

class User(TimeStampedModel, AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.email}"
    
    class Meta:
        ordering = ["-created_at"]

class UserSearch(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_searches')
    query = models.CharField(max_length=255)

    class Meta:  
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', 'query']),
        ]

    def __str__(self):
        return f"{self.user.email}: {self.query}"
    
class UserPreference(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='user_preferences')
    preffered_budget = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    preferred_transport_types = models.ForeignKey('transports.TransportType', on_delete=models.CASCADE, related_name='user_preferences', blank=True, null=True)
    hotel_stars = models.IntegerField(default=0)
    preferred_place_categories = models.ForeignKey('places.PlaceCategory', on_delete=models.CASCADE, related_name='user_preferences', blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s preferences"