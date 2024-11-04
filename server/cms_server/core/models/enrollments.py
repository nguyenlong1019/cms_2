from django.db import models
from cms_server.utils import CommonAbstract 
from .subject import Subject
from .student import Student 


class Enrollment(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    student = models.ForeignKey(Student, on_delete=models.SET_NULL, null=True, verbose_name='Sinh viên')
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, verbose_name='Học phần đăng ký')
    cost = models.IntegerField(default=0, verbose_name='Mức học phí')
    is_cost_done = models.BooleanField(default=False, verbose_name='Đã đóng học phí')
    reg_date = models.DateField(verbose_name='Ngày đăng ký')
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú')
    principal_cost = models.IntegerField(default=0)
    practice_cost = models.IntegerField(default=0)

    class Meta:
        verbose_name = 'Đăng ký học phần'
        verbose_name_plural = 'Đăng ký học phần'
        db_table = 'enrollments'

    
    def __str__(self):
        return f"{self.id}"
