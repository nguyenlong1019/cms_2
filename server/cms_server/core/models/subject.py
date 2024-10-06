from django.db import models 


class Subject(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    name_en = models.CharField(max_length=100, null=True, blank=True)
    # department = models.ForeignKey()
    # type = models.ForeignKey()
    # sub_group = models.ForeignKey() # Subject group 

