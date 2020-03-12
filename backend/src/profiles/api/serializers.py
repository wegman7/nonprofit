from django.contrib.auth.models import User
from rest_framework import serializers

from profiles.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = (
            'id', 
            'is_organization', 
            'first_name', 
            'last_name', 
            'area_of_expertise',
            'cause_of_interest',
            'organization_name', 
            'organization_info',
            'type_of_help_needed',
            'city',
            'state',
            'user',
            'user', 
            'username'
        )