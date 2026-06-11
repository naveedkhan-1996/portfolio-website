from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Project, Skill, BlogPost, Contact
from .serializers import CategorySerializer, ProjectSerializer, SkillSerializer, BlogSerializer, ContactSerializer
from django.core.mail import EmailMessage
from django.conf import settings

class CategoryView(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProjectView(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category']
    search_fields = ['title', 'description']

class SkillView(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all().order_by('-proficiency')
    serializer_class = SkillSerializer

class BlogView(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer

class ContactView(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    http_method_names = ['post']

    def perform_create(self, serializer):
        contact_instance = serializer.save()
        subject = f"New Portfolio Message: {contact_instance.subject}"
        message = f"""
        You have a new message from your portfolio website!
        From: {contact_instance.name}
        Email: {contact_instance.email}
        Message: {contact_instance.message} """

        formatted_sender = f"{contact_instance.name} <{settings.EMAIL_HOST_USER}>"
        
        email = EmailMessage(
            subject=subject,
            body=message,
            from_email=formatted_sender,
            to=[settings.EMAIL_HOST_USER],
            reply_to=[contact_instance.email]
        )
        email.send(fail_silently=False)
