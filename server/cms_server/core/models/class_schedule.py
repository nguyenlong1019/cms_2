from django.db import models 
from cms_server.utils import CommonAbstract  
from .subject import Subject


class ClassSchedule(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    class_code = models.CharField(max_length=15, null=True, blank=True, db_column='MaLopHocPhan', verbose_name='Mã lớp học phần')
    subject = models.ForeignKey(Subject, null=True, blank=True, db_column='IDMonHoc', verbose_name='Môn học', on_delete=models.SET_NULL)
    subject_code = models.CharField(max_length=10, null=True, blank=True, db_column='MaMonHoc', verbose_name='Mã môn học')
    subject_name = models.CharField(max_length=100, null=True, blank=True, db_column='TenMonHoc', verbose_name='Tên môn học')
    princ_qty = models.IntegerField(default=0, db_column='SoTietLyThuyet', verbose_name='Số tiết lý thuyết')
    prac_qty = models.IntegerField(default=0, db_column='SoTietThucHanh', verbose_name='Số tiết thực hành')
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú', db_column='GhiChu')


    class Meta:
        verbose_name = 'TKB Lớp học phần'
        verbose_name_plural = 'TKB Lớp học phần'
        db_table = 'DTBD_TKB_LopHocPhan'

    
    def __str__(self):
        return f"{self.id} - {self.class_code}"


# DD_LichHocSinhVien_TMP ??