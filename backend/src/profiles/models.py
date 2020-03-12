from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    is_organization = models.BooleanField(default=False)

    # fields for helpers
    first_name = models.CharField(max_length=200, blank=True, null=True)
    last_name = models.CharField(max_length=200, blank=True, null=True)
    area_of_expertise = models.CharField(max_length=200, blank=True, null=True)
    cause_of_interest = models.CharField(max_length=200, blank=True, null=True)

    # fields for organizations
    organization_name = models.CharField(max_length=200, blank=True, null=True)
    organization_info = models.CharField(max_length=200, blank=True, null=True)
    type_of_help_needed = models.CharField(max_length=200, blank=True, null=True)

    # fields for both
    city = models.CharField(max_length=200, blank=True, null=True)
    state = models.CharField(max_length=200, blank=True, null=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def username(self):
        return self.user.username

    def __str__(self):
        return self.user.username
