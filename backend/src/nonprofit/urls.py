from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('profiles.api.urls')),
    url(r'^.*', TemplateView.as_view(template_name='index.html')),
]
