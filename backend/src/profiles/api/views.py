from rest_framework import viewsets
from django.http import HttpResponse

from .serializers import ProfileSerializer
from profiles.models import Profile

class ProfileViewSet(viewsets.ModelViewSet):

    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    # def get_queryset(self):
    #     queryset = Profile.objects.filter(user=self.request.user)
    #     return queryset
    

    # this is how you manually change put request data
    # def update(self, request, pk):
    #     # this updates the profile for the logged in user
    #     Profile.objects.filter(user=request.user).update(first_name=request.data['first_name'], last_name=request.data['last_name'])
    #     return HttpResponse("data!", "status!")