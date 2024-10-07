from django.db import models 
from .subject_type import SubjectType 


class Subject(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=200, verbose_name='Mã môn học')
    name = models.CharField(max_length=200, verbose_name='Tên môn học')
    name_en = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tên tiếng Anh')
    department = models.CharField(max_length=255, verbose_name='Khoa')
    type = models.ForeignKey(SubjectType, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Loại môn học')
    sub_group = models.CharField(max_length=255, verbose_name='Tổ bộ môn') # Subject group 


    class Meta:
        verbose_name = 'Môn học'
        verbose_name_plural = 'Môn học'
        db_table = 'subject'


    def __str__(self):
        return f"{self.id} - {self.code}"
