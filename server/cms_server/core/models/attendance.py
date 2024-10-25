from django.db import models 
from cms_server.utils import CommonAbstract 
from .timetables import TimeTables 
from .custom_user import CustomUser 


class AttendanceHistory(CommonAbstract):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    timetable = models.ForeignKey(TimeTables, on_delete=models.SET_NULL, null=True, verbose_name='Thời khóa biểu')
    staff = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, verbose_name='Giảng viên')
    attendance_date = models.DateField(verbose_name='Ngày điểm danh')


    class Meta:
        verbose_name = 'Lịch sử điểm danh'
        verbose_name_plural = 'Lịch sử điểm danh'
        db_table = 'attendances_history'

    
    def __str__(self):
        return f"{self.id} - {self.attendance_date}"
