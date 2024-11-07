from django.db import models 
from cms_server.utils import CommonAbstract


class Classrooms(CommonAbstract):
    ROOM = (
        (0, 'Phòng lý thuyết'),
        (1, 'Phòng thực hành')
    )

    id = models.AutoField(db_column='Id', auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    room_code = models.CharField(max_length=20, verbose_name='Mã phòng', db_column='MaPhong')
    room_name = models.CharField(max_length=100, null=True, blank=True, db_column='TenPhong')
    # room_number = models.CharField(max_length=15, verbose_name='Số phòng', db_column='')
    # capacity = models.IntegerField(default=40, verbose_name='Sức chứa', db_column='SoCho')
    table_qty = models.IntegerField(default=10, verbose_name='Số bàn', db_column='SoBan')
    slot_qty = models.IntegerField(default=40, verbose_name='Số chỗ ngồi', db_column='SoCho')
    room_type = models.IntegerField(default=0, choices=ROOM, verbose_name='Loại phòng', db_column='LoaiPhong')
    note = models.TextField(null=True, blank=True, max_length=500, verbose_name='Ghi chú', db_column='GhiChu')
    has_projector = models.BooleanField(default=True, verbose_name='Máy chiếu', null=True, blank=True, db_column='MayChieu')
    square = models.FloatField(default=50, verbose_name='Diện tích', db_column='DienTich')
    exam_slot = models.IntegerField(null=True, blank=True, db_column='SoChoThi', verbose_name='Số chỗ thi')

    class Meta:
        verbose_name = 'Phòng học'
        verbose_name_plural = 'Phòng học'
        db_table = 'DM_Phong'


    def __str__(self):
        return f"{self.id} - {self.room_code}"
