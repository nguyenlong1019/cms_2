from django.db import models 
from cms_server.utils import CommonAbstract


class Classrooms(CommonAbstract):
    ROOM = (
        (0, 'Phòng lý thuyết'),
        (1, 'Phòng thực hành')
    )

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    room_code = models.CharField(max_length=20, verbose_name='Mã phòng')
    room_number = models.CharField(max_length=15, verbose_name='Số phòng')
    capacity = models.IntegerField(default=40, verbose_name='Sức chứa')
    table_qty = models.IntegerField(default=10, verbose_name='Số bàn')
    slot_qty = models.IntegerField(default=40, verbose_name='Số chỗ ngồi')
    room_type = models.IntegerField(default=0, choices=ROOM, verbose_name='Loại phòng')
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú')
    has_projector = models.BooleanField(default=True, verbose_name='Máy chiếu')
    square = models.FloatField(default=50, verbose_name='Diện tích')


    class Meta:
        verbose_name = 'Phòng học'
        verbose_name_plural = 'Phòng học'
        db_table = 'classroom'


    def __str__(self):
        return f"{self.id} - {self.room_number}"
