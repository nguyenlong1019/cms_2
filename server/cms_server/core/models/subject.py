from django.db import models 
from cms_server.utils import CommonAbstract 
from .semester import Semester


class Subject(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    subject_code = models.CharField(max_length=200, verbose_name='Mã học phần')
    subject_name = models.CharField(max_length=200, verbose_name='Tên học phần')
    subject_name_en = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tên tiếng Anh')
    credits = models.IntegerField(default=1, verbose_name='Số tín chỉ')
    semester = models.ForeignKey(Semester, on_delete=models.SET_NULL, null=True, verbose_name='Học kỳ')


    class Meta:
        verbose_name = 'Học phần'
        verbose_name_plural = 'Học phần'
        db_table = 'subject'


    def __str__(self):
        return f"{self.id} - {self.subject_code}"
