from profiles.api.views import ProfileViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ProfileViewSet, basename='profiles')
urlpatterns = router.urls




# from django.urls import path

# from .views import (
#     ProfileListView, 
#     ProfileDetailView,
#     ProfileCreateView,
#     ProfileUpdateView,
#     ProfileDeleteView
# )

# urlpatterns = [
#     path('', ProfileListView.as_view()),
#     path('create/', ProfileCreateView.as_view()),
#     path('<pk>', ProfileDetailView.as_view()),
#     path('<pk>/update/', ProfileUpdateView.as_view()),
#     path('<pk>/delete/', ProfileDeleteView.as_view())
# ]