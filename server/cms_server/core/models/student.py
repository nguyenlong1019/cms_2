from django.db import models 
from cms_server.utils import CommonAbstract 


class Student(CommonAbstract):
    GENDER = (
        (1, 'Male'),
        (2, 'Female')
    )

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    roll_no = models.CharField(max_length=20, unique=True, verbose_name='Mã sinh viên')
    lastname = models.CharField(max_length=50, verbose_name='Họ và tên đệm')
    firstname = models.CharField(max_length=20, verbose_name='Tên')
    gender = models.IntegerField(default=1, choices=GENDER, verbose_name='Giới tính')
    dob = models.DateField(null=True, blank=True, verbose_name='Ngày sinh')
    place_of_birth = models.DateField(null=True, blank=True, verbose_name='Nơi sinh')
    phone = models.CharField(max_length=100, null=True, blank=True, verbose_name='Số điện thoại')
    email = models.EmailField(max_length=100, unique=True, verbose_name='Email')
    address = models.CharField(max_length=255, default='', verbose_name='Địa chỉ')
    identity_number = models.CharField(max_length=15, default='', verbose_name='Số CCCD/CMND')


    class Meta:
        verbose_name = 'Quản lý sinh viên'
        verbose_name_plural = 'Quản lý sinh viên'
        db_table = 'students'

    
    def __str__(self):
        return f"{self.id} - {self.roll_no}"