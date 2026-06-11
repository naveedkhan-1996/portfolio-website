from django.db import models

class Category(models.Model):
    Category_Choices = [
        ('Frontend', 'Frontend'),
        ('Backend', 'Backend'),
        ('Fullstack', 'Fullstack'),
    ]

    name = models.CharField(max_length=100, choices=Category_Choices, unique=True, help_text="Select the category type")

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Categories"

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, related_name='projects', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    github_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    image_url = models.URLField(blank=True, help_text="Link to project thumbnail")

    def __str__(self):
        return self.title
    
class Skill(models.Model):
    name = models.CharField(max_length=50)
    proficiency = models.IntegerField(help_text="Enter a percentage (e.g., 90 for React)")

    def __str__(self):
        return self.name
    
class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blog/', blank=True, null=True)

    def __str__(self):
        return self.title
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"