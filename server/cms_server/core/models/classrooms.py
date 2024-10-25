from django.db import models 
from cms_server.utils import CommonAbstract


class Classrooms(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    room_number = models.CharField(max_length=15, verbose_name='Số phòng')
    capacity = models.IntegerField(default=40, verbose_name='Sức chứa')


    class Meta:
        verbose_name = 'Phòng học'
        verbose_name_plural = 'Phòng học'
        db_table = 'classroom'


    def __str__(self):
        return f"{self.id} - {self.room_number}"
