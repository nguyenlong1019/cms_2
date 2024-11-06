from django.db import models 
from cms_server.utils import CommonAbstract


class Semester(CommonAbstract):
    SEMESTER = (
        ('fall', 'Học kỳ 1'),
        ('spring', 'Học kỳ 2'),
        ('summer', 'Học kỳ 3')
    )

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    academic_year = models.IntegerField(default=2024, verbose_name='Năm học')
    semester = models.CharField(max_length=25, default='fall', verbose_name='Học kỳ')
    start_date = models.DateField()
    end_date = models.DateField()
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú')
    credit_require = models.IntegerField(verbose_name='Số tín chỉ yêu cầu', default=9)
    credit_optional = models.IntegerField(verbose_name='Số tín chỉ tự chọn', default=3)

    class Meta:
        verbose_name = 'Học kỳ'
        verbose_name_plural = 'Học kỳ'
        db_table = 'semester'


    def __str__(self):
        return f"{self.id} - {self.academic_year} - {self.semester}"
