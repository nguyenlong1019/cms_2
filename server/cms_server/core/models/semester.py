from django.db import models 
from cms_server.utils import CommonAbstract


class Semester(CommonAbstract):
    SEMESTER = (
        ('fall', 'Học kỳ 1'),
        ('spring', 'Học kỳ 2'),
        ('summer', 'Học kỳ 3')
    )

    id = models.AutoField(db_column='Id', auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    academic_year = models.IntegerField(default=2024, verbose_name='Năm học', null=True, blank=True, db_column='NamHoc')
    semester = models.IntegerField(default=1, verbose_name='Học kỳ', db_column='HocKy')
    # start_date = models.DateField()
    # end_date = models.DateField()
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú', db_column='GhiChu')
    credit_require = models.IntegerField(verbose_name='Số tín chỉ yêu cầu', default=9, db_column='SoTCBatBuoc')
    credit_optional = models.IntegerField(verbose_name='Số tín chỉ tự chọn', default=3, db_column='SoTCTuChon')

    class Meta:
        verbose_name = 'Học kỳ'
        verbose_name_plural = 'Học kỳ'
        db_table = 'semester'


    def __str__(self):
        return f"{self.id} - {self.academic_year} - {self.semester}"
