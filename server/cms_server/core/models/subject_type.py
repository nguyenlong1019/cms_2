from django.db import models 


class SubjectType(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=10, unique=True, verbose_name='Mã loại môn học')
    name = models.CharField(max_length=100, verbose_name='Tên loại môn học')
    ser_num = models.IntegerField(null=True, blank=True, verbose_name='Số thứ tự')
    note = models.CharField(max_length=200, null=True, blank=True, verbose_name='Ghi chú')


    class Meta:
        verbose_name = 'Loại môn học'
        verbose_name_plural = 'Loại môn học'
        db_table = 'subject_type'

    
    def __str__(self):
        return f"{self.id} - {self.code}"
