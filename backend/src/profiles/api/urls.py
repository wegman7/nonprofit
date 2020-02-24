from django.urls import path

from .views import ProfileListView, ProfileDetailView

urlpatterns = [
    path('', ProfileListView.as_view()),
    path('<pk>', ProfileDetailView.as_view())
]