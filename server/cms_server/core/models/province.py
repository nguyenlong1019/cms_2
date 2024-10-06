from django.db import models 


class Province(models.Model):
    id = models.AutoField(auto_created=True, serialize=False, primary_key=True, verbose_name='ID')
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    name_en = models.CharField(max_length=100, null=True, blank=True)
    
