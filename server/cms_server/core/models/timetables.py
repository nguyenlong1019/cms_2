from django.db import models 
from cms_server.utils import CommonAbstract 
from .subject import Subject 
from .classrooms import Classrooms


class TimeTables(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, verbose_name='Học phần')
    classroom = models.ForeignKey(Classrooms, on_delete=models.SET_NULL, null=True, verbose_name='Phòng học')
    date = models.DateField(verbose_name='Ngày học')
    start_time = models.DateTimeField(verbose_name='Giờ bắt đầu')
    end_time = models.DateTimeField(verbose_name='Giờ kết thúc')


    class Meta:
        verbose_name = 'Thời khóa biểu'
        verbose_name_plural = 'Thời khóa biểu'
        db_table = 'timetables'

    
    def __str__(self):
        return f"{self.id} - {self.date}"
