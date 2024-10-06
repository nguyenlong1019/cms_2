from django.db import models 


class Major(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    enroll_code = models.CharField(max_length=10) # enrollment code 
    # department = models.ForeignKey()
    name_en = models.CharField(max_length=100, null=True, blank=True)  

