from django.db import models 


class Student(models.Model):
    GENDER = (
        (1, 'Male'),
        (2, 'Female')
    )

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    roll_no = models.CharField(max_length=20, unique=True)
    lastname = models.CharField(max_length=50)
    firstname = models.CharField(max_length=20)
    gender = models.IntegerField(default=1, choices=GENDER)
    dob = models.DateField()
    # pob = models.ForeignKey() # place of birth 
    phone = models.CharField(max_length=100, null=True, blank=True)
    # training_fac = models.ForeignKey()
    # type = models.ForeignKey() # type of training 
    # course = models.ForeignKey()
    # major = models.ForeignKey()
    # classroom = models.ForeignKey()
    email = models.EmailField(max_length=100, unique=True)
    status = models.IntegerField(default=1)
    # rank = models.ForeignKey()
    acc = models.CharField(max_length=100, null=True, blank=True)
    pwd = models.CharField(max_length=100)
