from django.db import models


class TrainingSys(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=10, unique=True, verbose_name='Mã hệ đào tạo')
    name = models.CharField(max_length=100, verbose_name='Tên hệ đào tạo')
    ser_num = models.IntegerField(null=True, blank=True, verbose_name='Số thứ tự')
    note = models.CharField(max_length=200, null=True, blank=True, verbose_name='Ghi chú')


    class Meta:
        verbose_name = 'Hệ đào tạo'
        verbose_name_plural = 'Hệ đào tạo'
        db_table = 'training_sys'


    def __str__(self):
        return f"{self.id} - {self.code}"
