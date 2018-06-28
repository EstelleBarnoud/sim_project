from django.db import models
from django.utils import timezone

class Project(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=42)
    date = models.DateTimeField(default=timezone.now, verbose_name="Date de création")
    # image =
    # themes = 
    # goals =
    description = models.TextField()
    # steps =
    # links =

    def __str__(self):
        """A string representation of the model."""
        return self.title
