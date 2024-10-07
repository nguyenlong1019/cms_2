from django.db import models 


class Province(models.Model):
    id = models.AutoField(auto_created=True, serialize=False, primary_key=True, verbose_name='ID')
    code = models.CharField(max_length=10, verbose_name='Mã tỉnh')
    name = models.CharField(max_length=100, verbose_name='Tên tỉnh')
    name_en = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tên tiếng Anh')


    class Meta:
        verbose_name = 'Tỉnh thành phố'
        verbose_name_plural = 'Tỉnh thành phố'
        db_table = 'province'


    def __str__(self):
        return f"{self.id} - {self.code}"    
