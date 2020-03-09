from django.contrib.auth.models import User
from rest_framework import serializers

from profiles.models import Profile

# class LoginSerializer(serializers.ModelSerializer):
#     """
#     Serializer for Token model.
#     """
#     # user = UserInfoSerializer(many=False, read_only=True)  # this is add by myself.
#     class Meta:
#         model = User
#         fields = ['username']   # there I add the `user` field ( this is my need data ).

class ProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = ('id', 'first_name', 'last_name', 'is_organization', 'organization_name', 'user', 'username')