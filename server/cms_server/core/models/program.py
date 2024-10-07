from django.db import models 
from .training_sys import TrainingSys 
from .training_type import TrainingType 
from .major import Major 
from .career import Career


class Program(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=50, verbose_name='Mã khung chương trình')
    name = models.TextField(verbose_name='Tên khung chương trình')
    training_fac = models.CharField(max_length=255, verbose_name='Cơ sở đào tạo') # training facility 
    training_sys = models.ForeignKey(TrainingSys, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Hệ đào tạo') # training system
    type = models.ForeignKey(TrainingType, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Loại hình đào tạo') # type of training  
    course = models.CharField(max_length=255, verbose_name='Khóa học')
    major = models.ForeignKey(Major, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Chuyên ngành')
    career = models.ForeignKey(Career, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Nghề')
    type_of_career = models.CharField(max_length=255, verbose_name='Loại nghề')
    training_lang = models.CharField(max_length=255, verbose_name='Ngôn ngữ đào tạo') # training language 


    class Meta:
        verbose_name = 'Khung chương trình'
        verbose_name_plural = 'Khung chương trình'
        db_table = 'program'

    
    def __str__(self):
        return f"{self.id} - {self.code}"


