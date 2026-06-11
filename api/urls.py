from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryView, ProjectView, SkillView, BlogView, ContactView
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'categories', CategoryView)
router.register(r'projects', ProjectView)
router.register(r'skills', SkillView)
router.register(r'blog', BlogView)
router.register(r'contact', ContactView, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)