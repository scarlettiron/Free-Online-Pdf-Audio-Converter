from django.db import models

class ConvertedFile(models.Model):
    file = models.FileField(upload_to='converted-files/')
    date = models.DateTimeField(auto_now_add=True)
    
    
