from django.db import models 
from cms_server.utils import CommonAbstract 
from .class_schedule import ClassSchedule 
from .classrooms import Classrooms


class TimeTables(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID', db_column='Id')
    class_sche = models.ForeignKey(ClassSchedule, on_delete=models.SET_NULL, null=True, verbose_name='Học phần', db_column='IDLopHocPhan')
    classroom = models.ForeignKey(Classrooms, on_delete=models.SET_NULL, null=True, verbose_name='Phòng học', db_column='IDPhong')
    # date = models.DateField(verbose_name='Ngày học')
    # start_time = models.DateTimeField(verbose_name='Giờ bắt đầu')
    # end_time = models.DateTimeField(verbose_name='Giờ kết thúc')
    qty = models.IntegerField(default=25, verbose_name='Sĩ số', db_column='SiSo')
    day = models.IntegerField(null=True, blank=True, verbose_name='Thứ', db_column='Thu')
    begin = models.IntegerField(null=True, blank=True, verbose_name='Từ tiết', db_column='TuTiet')
    finish = models.IntegerField(null=True, blank=True, verbose_name='Đến tiết', db_column='DenTiet')
    date_on = models.DateField(null=True, blank=True, verbose_name='Ngày học', db_column='NgayHoc')
    total_lession = models.IntegerField(null=True, blank=True, verbose_name='Tổng tiết dạy', db_column='TongTietDay')
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú', db_column='GhiChu')


    class Meta:
        verbose_name = 'Thời khóa biểu'
        verbose_name_plural = 'Thời khóa biểu'
        db_table = 'DTBD_TKB_LichHoc'

    
    def __str__(self):
        return f"{self.id} - {self.date_on}"
