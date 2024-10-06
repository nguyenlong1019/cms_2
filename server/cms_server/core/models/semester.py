from django.db import models 


class Semester(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    ser_number = models.IntegerField(default=1) # serialize number 
    code = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    # school_year = models.ForeignKey()
    is_active = models.BooleanField(default=True)
    is_visible = models.BooleanField(default=True)
    week_number = models.IntegerField(default=8)
    from_month = models.IntegerField(default=1)
    to_month = models.IntegerField(default=1)
    from_date = models.DateField()
    to_date = models.DateField()
    name_en = models.CharField(max_length=200, null=True, blank=True)
