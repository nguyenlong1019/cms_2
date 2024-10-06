from django.db import models


class Program(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=50)
    name = models.TextField()
    # training_fac = models.ForeignKey() # training facility 
    # training_sys = models.ForeignKey() # training system
    # type = models.ForeignKey() # type of training  
    # course = models.ForeignKey()
    # major = models.ForeignKey()
    # career = models.ForeignKey()
    # type_of_career = models.ForeignKey()
    # training_lang = models.ForeignKey() # training language 

