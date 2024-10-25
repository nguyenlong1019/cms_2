from django.db import models 
from cms_server.utils import CommonAbstract 
from .subject import Subject 
from .classrooms import Classrooms


class Exam(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, verbose_name='Môn thi')
    date = models.DateField(verbose_name='Ngày thi')
    time_slot = models.CharField(max_length=255, null=True, blank=True, verbose_name='Tiết thi')
    room = models.ForeignKey(Classrooms, on_delete=models.SET_NULL, null=True, verbose_name='Phòng thi')
    start_time = models.DateTimeField(verbose_name='Giờ bắt đầu')
    end_time = models.DateTimeField(verbose_name='Giờ kết thúc')


    class Meta:
        verbose_name = 'Lịch thi'
        verbose_name_plural = 'Lịch thi'
        db_table = 'exams'


    def __str__(self):
        return f"{self.id} - {self.date} - {self.room}"