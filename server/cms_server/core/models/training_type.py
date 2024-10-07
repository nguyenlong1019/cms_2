from django.db import models 


class TrainingType(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=10, verbose_name='Mã loại hình đào tạo')
    name = models.CharField(max_length=100, verbose_name='Tên loại hình đào tạo')
    ser_num = models.IntegerField(null=True, blank=True, verbose_name='Số thứ tự')
    note = models.CharField(max_length=200, null=True, blank=True, verbose_name='Ghi chú')
    type = models.CharField(max_length=100, null=True, blank=True, verbose_name='Hình thức')
    name_en = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tên tiếng anh')
    is_visible = models.BooleanField(null=True, blank=True, verbose_name='Trạng thái hiển thị')


    class Meta:
        verbose_name = 'Loại hình đào tạo'
        verbose_name_plural = 'Loại hình đào tạo'
        db_table = 'training_type'


    def __str__(self):
        return f"{self.id} - {self.code}"
