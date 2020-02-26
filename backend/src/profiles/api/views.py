from rest_framework import viewsets

from profiles.models import Profile
from .serializers import ProfileSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

# from rest_framework.generics import (
#     ListAPIView, 
#     RetrieveAPIView,
#     CreateAPIView,
#     UpdateAPIView,
#     DestroyAPIView
# )

# class ProfileListView(ListAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer

# class ProfileDetailView(RetrieveAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer

# class ProfileCreateView(CreateAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer

# class ProfileUpdateView(UpdateAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer

# class ProfileDeleteView(DestroyAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer