from django.db import models 
from .school_year import SchoolYear 


class Semester(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    ser_number = models.IntegerField(default=1, verbose_name='Số thứ tự') # serialize number 
    code = models.CharField(max_length=50, verbose_name='Mã học kỳ')
    name = models.CharField(max_length=50, verbose_name='Tên học kỳ')
    school_year = models.ForeignKey(SchoolYear, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Năm học')
    is_active = models.BooleanField(default=True, verbose_name='Trạng thái kích hoạt')
    is_visible = models.BooleanField(default=True, verbose_name='Trạng thái hiển thị')
    week_number = models.IntegerField(default=8, verbose_name='Số tuần học')
    from_month = models.IntegerField(default=1, verbose_name='Từ tháng')
    to_month = models.IntegerField(default=1, verbose_name='Đến tháng')
    from_date = models.DateField(verbose_name='Từ ngày')
    to_date = models.DateField(verbose_name='Đến ngày')
    name_en = models.CharField(max_length=200, null=True, blank=True, verbose_name='Tên tiếng Anh')


    class Meta:
        verbose_name = 'Học kỳ'
        verbose_name_plural = 'Học kỳ'
        db_table = 'semester'


    def __str__(self):
        return f"{self.id} - {self.code}"
