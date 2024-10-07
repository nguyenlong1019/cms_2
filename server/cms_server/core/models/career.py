from django.db import models 


class Career(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=20, unique=True, verbose_name='Mã nghề')
    name = models.CharField(max_length=100, verbose_name='Tên nghề')
    name_en = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tên tiếng Anh')
    symbol = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tên viết tắt')
    ser_num = models.IntegerField(null=True, blank=True, verbose_name='Số thứ tự')
    note = models.CharField(max_length=200, null=True, blank=True, verbose_name='Ghi chú')

    
    class Meta:
        verbose_name = 'Nghề'
        verbose_name_plural = 'Nghề'
        db_table = 'career'


    def __str__(self):
        return f"{self.id} - {self.code}"
