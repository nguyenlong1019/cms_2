from django.db import models 
from .career import Career 
from .training_type import TrainingType


class Classroom(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=20, verbose_name='Mã lớp')
    code_number = models.CharField(max_length=50, verbose_name='Mã lớp (số)')
    classname = models.CharField(max_length=100, verbose_name='Tên lớp')
    teacher = models.CharField(max_length=255, verbose_name='Giáo viên chủ nhiệm')
    qty = models.IntegerField(default=1, verbose_name='Sĩ số')
    training_fac = models.CharField(max_length=255, verbose_name='Cơ sở đào tạo') # training facility 
    type = models.ForeignKey(TrainingType, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Loại hình đào tạo') # type of training 
    course = models.CharField(max_length=255, verbose_name='Khóa học') 
    major = models.CharField(max_length=255, verbose_name='Chuyên ngành')
    career = models.ForeignKey(Career, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Nghề')


    class Meta:
        verbose_name = 'Lớp học'
        verbose_name_plural = 'Lớp học'
        db_table = 'classroom'


    def __str__(self):
        return f"{self.id} - {self.code}"
