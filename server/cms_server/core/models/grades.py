from django.db import models 
from cms_server.utils import CommonAbstract
from .enrollments import Enrollment 


class Grade(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    enrollment = models.ForeignKey(Enrollment, on_delete=models.SET_NULL, null=True, verbose_name='Học phần đăng ký')
    grade = models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Điểm')


    class Meta:
        verbose_name = 'Điểm học phần'
        verbose_name_plural = 'Điểm học phần'
        db_table = 'grades'

    
    def __str__(self):
        return f"{self.id} - {self.grade}"
