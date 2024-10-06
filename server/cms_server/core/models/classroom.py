from django.db import models 


class Classroom(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=20)
    code_number = models.CharField(max_length=50)
    classname = models.CharField(max_length=100)
    # teacher = models.ForeignKey()
    qty = models.IntegerField(default=1)
    # training_fac = models.ForeignKey() # training facility 
    # type = models.ForeignKey() # type of training 
    # course = models.ForeignKey() 
    # major = models.ForeignKey()
    # career = models.ForeignKey()
