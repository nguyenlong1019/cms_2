from django.db import models 
from cms_server.utils import CommonAbstract 


class Student(CommonAbstract):
    GENDER = (
        (1, 'Male'),
        (2, 'Female')
    )

    id = models.AutoField(db_column='Id', auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    roll_no = models.CharField(max_length=20, unique=True, verbose_name='Mã sinh viên', db_column='MaSinhVien')
    lastname = models.CharField(max_length=50, verbose_name='Họ và tên đệm', db_column='HoDem')
    firstname = models.CharField(max_length=20, verbose_name='Tên', db_column='Ten')
    gender = models.IntegerField(default=1, choices=GENDER, verbose_name='Giới tính', db_column='GioiTinh')
    dob = models.DateField(null=True, blank=True, verbose_name='Ngày sinh', db_column='NgaySinh')
    place_of_birth = models.CharField(null=True, blank=True, verbose_name='Nơi sinh', db_column='NoiSinh', max_length=255)
    nation = models.CharField(max_length=100, null=True, blank=True, db_column='DanToc', verbose_name='Dân tộc')
    religion = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tôn giáo', db_column='TonGiao')
    phone = models.CharField(max_length=100, null=True, blank=True, verbose_name='Số điện thoại', db_column='SoDienThoai')
    email = models.EmailField(max_length=100, unique=True, verbose_name='Email', db_column='Email')
    address = models.CharField(max_length=255, default='', verbose_name='Địa chỉ', db_column='DiaChiThuongTru')
    address_2 = models.CharField(max_length=255, null=True, blank=True, verbose_name='', db_column='DiaChiLienLac')
    identity_number = models.CharField(max_length=15, default='', verbose_name='Số CCCD/CMND', db_column='SoCMND')


    class Meta:
        verbose_name = 'Quản lý sinh viên'
        verbose_name_plural = 'Quản lý sinh viên'
        db_table = 'DT_SinhVien'

    
    def __str__(self):
        return f"{self.id} - {self.roll_no}"