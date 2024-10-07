from django.db import models 


class SchoolYear(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    year = models.IntegerField(default=2024, verbose_name='Năm học')
    name = models.CharField(max_length=20, unique=True, verbose_name='Niên khóa')
    from_date = models.DateField(verbose_name='Từ ngày')
    to_date = models.DateField(verbose_name='Đến ngày')
    name_en = models.CharField(max_length=200, null=True, blank=True, verbose_name='Tên tiếng Anh')
    code = models.CharField(max_length=50, null=True, blank=True, verbose_name='Mã năm học')


    class Meta:
        verbose_name = 'Năm học'
        verbose_name_plural = 'Năm học'
        db_table = 'school_year'


    def __str__(self):
        return f"{self.id} - {self.code}"
