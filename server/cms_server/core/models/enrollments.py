from django.db import models
from cms_server.utils import CommonAbstract 
from .subject import Subject
from .student import Student 


class Enrollment(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    student = models.ForeignKey(Student, on_delete=models.SET_NULL, null=True, verbose_name='Sinh viên')
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, verbose_name='Học phần đăng ký')


    class Meta:
        verbose_name = 'Đăng ký học phần'
        verbose_name_plural = 'Đăng ký học phần'
        db_table = 'enrollments'

    
    def __str__(self):
        return f"{self.id}"
