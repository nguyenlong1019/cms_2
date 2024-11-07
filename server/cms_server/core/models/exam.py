from django.db import models 
from cms_server.utils import CommonAbstract 
from .classrooms import Classrooms 
from .class_schedule import ClassSchedule 


class Exam(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID', db_column='Id')
    class_sche = models.ForeignKey(ClassSchedule, on_delete=models.SET_NULL, null=True, db_column='IDLopHocPhan', verbose_name='Lớp học phần')
    qty = models.IntegerField(default=20, null=True, blank=True, db_column='SiSo', verbose_name='Sĩ số')
    day = models.IntegerField(null=True, blank=True, db_column='Thu', verbose_name='Thứ')
    begin = models.IntegerField(null=True, blank=True, db_column='TuTiet', verbose_name='Từ tiết')
    finish = models.IntegerField(null=True, blank=True, db_column='DenTiet', verbose_name='Đến tiết')
    exam_date = models.DateField(null=True, blank=True, db_column='NgayThi', verbose_name='Ngày thi')
    exam_time = models.CharField(max_length=50, null=True, db_column='ThoiGianThi', verbose_name='Thời gian thi')
    total_time = models.IntegerField(default=1, null=True, blank=True, db_column='TongTietThi', verbose_name='Tổng tiết thi')
    room = models.ForeignKey(Classrooms, on_delete=models.SET_NULL, null=True, db_column='IDPhong', verbose_name='Phòng thi')
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú', db_column='GhiChu')


    class Meta:
        verbose_name = 'Lịch thi'
        verbose_name_plural = 'Lịch thi'
        db_table = 'DTBD_TKB_LichThi'


    def __str__(self):
        return f"{self.id} - {self.exam_date} - {self.room}"