from django.db import models 


class Subject(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    subject_code = models.CharField(max_length=200, verbose_name='Mã học phần')
    subject_name = models.CharField(max_length=200, verbose_name='Tên học phần')
    subject_name_en = models.CharField(max_length=100, null=True, blank=True, verbose_name='Tên tiếng Anh')


    class Meta:
        verbose_name = 'Học phần'
        verbose_name_plural = 'Học phần'
        db_table = 'subject'


    def __str__(self):
        return f"{self.id} - {self.subject_code}"
