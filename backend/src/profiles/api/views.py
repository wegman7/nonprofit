from rest_framework import viewsets
from django.http import HttpResponse

from .serializers import ProfileSerializer
from profiles.models import Profile

class ProfileViewSet(viewsets.ModelViewSet):

    serializer_class = ProfileSerializer

    def get_queryset(self):
        print(self.request.user.id)
        queryset = Profile.objects.filter(user=self.request.user)
        return queryset
    
    def update(self, request, pk):
        # this updates the profile for the logged in user
        Profile.objects.filter(user=request.user).update(first_name=request.data['first_name'], last_name=request.data['last_name'])
        return HttpResponse("data!", "status!")