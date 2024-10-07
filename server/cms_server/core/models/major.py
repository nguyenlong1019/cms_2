from django.db import models 


class Major(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    code = models.CharField(max_length=20, verbose_name='Mã ngành')
    name = models.CharField(max_length=100, verbose_name='Tên ngành')
    enroll_code = models.CharField(max_length=10, verbose_name='Mã ngành tuyển sinh') # enrollment code 
    department = models.CharField(max_length=255, verbose_name='Khoa')
    name_en = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tên tiếng Anh')  


    class Meta:
        verbose_name = 'Chuyên ngành'
        verbose_name_plural = 'Chuyên ngành'
        db_table = 'major'


    def __str__(self):
        return f"{self.id} - {self.code}"

