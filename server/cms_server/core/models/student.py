from django.db import models 
from .province import Province 
from .training_type import TrainingType 
from .major import Major 
from .classroom import Classroom 


class Student(models.Model):
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
    pob = models.ForeignKey(Province, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Nơi sinh') # place of birth 
    phone = models.CharField(max_length=100, null=True, blank=True, verbose_name='Số điện thoại')
    training_fac = models.CharField(max_length=255, verbose_name='Cơ sở đào tạo')
    type = models.ForeignKey(TrainingType, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Loại hình đào tạo') # type of training 
    course = models.CharField(max_length=255, verbose_name='Khóa học')
    major = models.ForeignKey(Major, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Chuyên ngành')
    classroom = models.ForeignKey(Classroom, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Lớp học')
    email = models.EmailField(max_length=100, unique=True, verbose_name='Email')
    status = models.IntegerField(default=1, verbose_name='Trạng thái sinh viên')
    # rank = models.CharField(max_length=255, verbose_name='')
    acc = models.CharField(max_length=100, null=True, blank=True, verbose_name='Số tài khoản')
    pwd = models.CharField(max_length=100, verbose_name='Mật khẩu đăng nhập')


    class Meta:
        verbose_name = 'Quản lý sinh viên'
        verbose_name_plural = 'Quản lý sinh viên'
        db_table = 'students'

    
    def __str__(self):
        return f"{self.id} - {self.roll_no}"