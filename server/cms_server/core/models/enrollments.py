from django.db import models
from cms_server.utils import CommonAbstract 
from .subject import Subject
from .student import Student 


class Enrollment(CommonAbstract):
    id = models.AutoField(db_column='Id', auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    student = models.ForeignKey(Student, on_delete=models.SET_NULL, null=True, verbose_name='Sinh viên', db_column='IDSinhVien')
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, verbose_name='Học phần đăng ký', db_column='IDLopHocPhan')
    cost = models.IntegerField(default=0, verbose_name='Mức học phí', db_column='MucHocPhi')
    is_cost_done = models.BooleanField(default=False, verbose_name='Đã đóng học phí', db_column='DaDongHocPhi')
    reg_date = models.DateField(verbose_name='Ngày đăng ký', db_column='NgayDangKy', null=True, blank=True)
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú', db_column='GhiChu')
    principal_cost = models.IntegerField(default=0, verbose_name='Đơn giá lý thuyết', db_column='DonGiaLT')
    practice_cost = models.IntegerField(default=0, verbose_name='Đơn giá thực hành', db_column='DonGiaTH')

    class Meta:
        verbose_name = 'Đăng ký học phần'
        verbose_name_plural = 'Đăng ký học phần'
        db_table = 'DT_DangKyHocPhan'

    
    def __str__(self):
        return f"{self.id}"
