# Generated by Django 4.2.9 on 2024-11-07 09:35

from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('role', models.CharField(choices=[('staff', 'staff'), ('manager', 'manager')], default='staff', max_length=15)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'Tài khoản',
                'verbose_name_plural': 'Tài khoản',
                'db_table': 'users',
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Classrooms',
            fields=[
                ('id', models.AutoField(auto_created=True, db_column='Id', primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('room_code', models.CharField(db_column='MaPhong', max_length=20, verbose_name='Mã phòng')),
                ('room_name', models.CharField(blank=True, db_column='TenPhong', max_length=100, null=True)),
                ('table_qty', models.IntegerField(db_column='SoBan', default=10, verbose_name='Số bàn')),
                ('slot_qty', models.IntegerField(db_column='SoCho', default=40, verbose_name='Số chỗ ngồi')),
                ('room_type', models.IntegerField(choices=[(0, 'Phòng lý thuyết'), (1, 'Phòng thực hành')], db_column='LoaiPhong', default=0, verbose_name='Loại phòng')),
                ('note', models.TextField(blank=True, db_column='GhiChu', max_length=500, null=True, verbose_name='Ghi chú')),
                ('has_projector', models.BooleanField(blank=True, db_column='MayChieu', default=True, null=True, verbose_name='Máy chiếu')),
                ('square', models.FloatField(db_column='DienTich', default=50, verbose_name='Diện tích')),
                ('exam_slot', models.IntegerField(blank=True, db_column='SoChoThi', null=True, verbose_name='Số chỗ thi')),
            ],
            options={
                'verbose_name': 'Phòng học',
                'verbose_name_plural': 'Phòng học',
                'db_table': 'DM_Phong',
            },
        ),
        migrations.CreateModel(
            name='ClassSchedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('class_code', models.CharField(blank=True, db_column='MaLopHocPhan', max_length=15, null=True, verbose_name='Mã lớp học phần')),
                ('subject_code', models.CharField(blank=True, db_column='MaMonHoc', max_length=10, null=True, verbose_name='Mã môn học')),
                ('subject_name', models.CharField(blank=True, db_column='TenMonHoc', max_length=100, null=True, verbose_name='Tên môn học')),
                ('princ_qty', models.IntegerField(db_column='SoTietLyThuyet', default=0, verbose_name='Số tiết lý thuyết')),
                ('prac_qty', models.IntegerField(db_column='SoTietThucHanh', default=0, verbose_name='Số tiết thực hành')),
                ('note', models.TextField(blank=True, db_column='GhiChu', max_length=500, null=True, verbose_name='Ghi chú')),
            ],
            options={
                'verbose_name': 'TKB Lớp học phần',
                'verbose_name_plural': 'TKB Lớp học phần',
                'db_table': 'DTBD_TKB_LopHocPhan',
            },
        ),
        migrations.CreateModel(
            name='Enrollment',
            fields=[
                ('id', models.AutoField(auto_created=True, db_column='Id', primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('cost', models.IntegerField(db_column='MucHocPhi', default=0, verbose_name='Mức học phí')),
                ('is_cost_done', models.BooleanField(db_column='DaDongHocPhi', default=False, verbose_name='Đã đóng học phí')),
                ('reg_date', models.DateField(blank=True, db_column='NgayDangKy', null=True, verbose_name='Ngày đăng ký')),
                ('note', models.TextField(blank=True, db_column='GhiChu', max_length=500, null=True, verbose_name='Ghi chú')),
                ('principal_cost', models.IntegerField(db_column='DonGiaLT', default=0, verbose_name='Đơn giá lý thuyết')),
                ('practice_cost', models.IntegerField(db_column='DonGiaTH', default=0, verbose_name='Đơn giá thực hành')),
            ],
            options={
                'verbose_name': 'Đăng ký học phần',
                'verbose_name_plural': 'Đăng ký học phần',
                'db_table': 'DT_DangKyHocPhan',
            },
        ),
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.AutoField(auto_created=True, db_column='Id', primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('academic_year', models.IntegerField(blank=True, db_column='NamHoc', default=2024, null=True, verbose_name='Năm học')),
                ('semester', models.IntegerField(db_column='HocKy', default=1, verbose_name='Học kỳ')),
                ('note', models.TextField(blank=True, db_column='GhiChu', max_length=500, null=True, verbose_name='Ghi chú')),
                ('credit_require', models.IntegerField(db_column='SoTCBatBuoc', default=9, verbose_name='Số tín chỉ yêu cầu')),
                ('credit_optional', models.IntegerField(db_column='SoTCTuChon', default=3, verbose_name='Số tín chỉ tự chọn')),
            ],
            options={
                'verbose_name': 'Học kỳ',
                'verbose_name_plural': 'Học kỳ',
                'db_table': 'semester',
            },
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, db_column='Id', primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('roll_no', models.CharField(db_column='MaSinhVien', max_length=20, unique=True, verbose_name='Mã sinh viên')),
                ('lastname', models.CharField(db_column='HoDem', max_length=50, verbose_name='Họ và tên đệm')),
                ('firstname', models.CharField(db_column='Ten', max_length=20, verbose_name='Tên')),
                ('gender', models.IntegerField(choices=[(1, 'Male'), (2, 'Female')], db_column='GioiTinh', default=1, verbose_name='Giới tính')),
                ('dob', models.DateField(blank=True, db_column='NgaySinh', null=True, verbose_name='Ngày sinh')),
                ('place_of_birth', models.CharField(blank=True, db_column='NoiSinh', max_length=255, null=True, verbose_name='Nơi sinh')),
                ('nation', models.CharField(blank=True, db_column='DanToc', max_length=100, null=True, verbose_name='Dân tộc')),
                ('religion', models.CharField(blank=True, db_column='TonGiao', max_length=100, null=True, verbose_name='Tôn giáo')),
                ('phone', models.CharField(blank=True, db_column='SoDienThoai', max_length=100, null=True, verbose_name='Số điện thoại')),
                ('email', models.EmailField(db_column='Email', max_length=100, unique=True, verbose_name='Email')),
                ('address', models.CharField(db_column='DiaChiThuongTru', default='', max_length=255, verbose_name='Địa chỉ')),
                ('address_2', models.CharField(blank=True, db_column='DiaChiLienLac', max_length=255, null=True, verbose_name='')),
                ('identity_number', models.CharField(db_column='SoCMND', default='', max_length=15, verbose_name='Số CCCD/CMND')),
            ],
            options={
                'verbose_name': 'Quản lý sinh viên',
                'verbose_name_plural': 'Quản lý sinh viên',
                'db_table': 'DT_SinhVien',
            },
        ),
        migrations.CreateModel(
            name='TimeTables',
            fields=[
                ('id', models.AutoField(auto_created=True, db_column='Id', primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('qty', models.IntegerField(db_column='SiSo', default=25, verbose_name='Sĩ số')),
                ('day', models.IntegerField(blank=True, db_column='Thu', null=True, verbose_name='Thứ')),
                ('begin', models.IntegerField(blank=True, db_column='TuTiet', null=True, verbose_name='Từ tiết')),
                ('finish', models.IntegerField(blank=True, db_column='DenTiet', null=True, verbose_name='Đến tiết')),
                ('date_on', models.DateField(blank=True, db_column='NgayHoc', null=True, verbose_name='Ngày học')),
                ('total_lession', models.IntegerField(blank=True, db_column='TongTietDay', null=True, verbose_name='Tổng tiết dạy')),
                ('note', models.TextField(blank=True, db_column='GhiChu', max_length=500, null=True, verbose_name='Ghi chú')),
                ('class_sche', models.ForeignKey(db_column='IDLopHocPhan', null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.classschedule', verbose_name='Học phần')),
                ('classroom', models.ForeignKey(db_column='IDPhong', null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.classrooms', verbose_name='Phòng học')),
            ],
            options={
                'verbose_name': 'Thời khóa biểu',
                'verbose_name_plural': 'Thời khóa biểu',
                'db_table': 'DTBD_TKB_LichHoc',
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('subject_code', models.CharField(max_length=200, verbose_name='Mã học phần')),
                ('subject_name', models.CharField(max_length=200, verbose_name='Tên học phần')),
                ('subject_name_en', models.CharField(blank=True, max_length=100, null=True, verbose_name='Tên tiếng Anh')),
                ('credits', models.IntegerField(default=1, verbose_name='Số tín chỉ')),
                ('semester', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.semester', verbose_name='Học kỳ')),
            ],
            options={
                'verbose_name': 'Học phần',
                'verbose_name_plural': 'Học phần',
                'db_table': 'subject',
            },
        ),
        migrations.CreateModel(
            name='Grade',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('grade', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Điểm')),
                ('enrollment', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.enrollment', verbose_name='Học phần đăng ký')),
            ],
            options={
                'verbose_name': 'Điểm học phần',
                'verbose_name_plural': 'Điểm học phần',
                'db_table': 'grades',
            },
        ),
        migrations.CreateModel(
            name='Exam',
            fields=[
                ('id', models.AutoField(auto_created=True, db_column='Id', primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('qty', models.IntegerField(blank=True, db_column='SiSo', default=20, null=True, verbose_name='Sĩ số')),
                ('day', models.IntegerField(blank=True, db_column='Thu', null=True, verbose_name='Thứ')),
                ('begin', models.IntegerField(blank=True, db_column='TuTiet', null=True, verbose_name='Từ tiết')),
                ('finish', models.IntegerField(blank=True, db_column='DenTiet', null=True, verbose_name='Đến tiết')),
                ('exam_date', models.DateField(blank=True, db_column='NgayThi', null=True, verbose_name='Ngày thi')),
                ('exam_time', models.CharField(db_column='ThoiGianThi', max_length=50, null=True, verbose_name='Thời gian thi')),
                ('total_time', models.IntegerField(blank=True, db_column='TongTietThi', default=1, null=True, verbose_name='Tổng tiết thi')),
                ('note', models.TextField(blank=True, db_column='GhiChu', max_length=500, null=True, verbose_name='Ghi chú')),
                ('class_sche', models.ForeignKey(db_column='IDLopHocPhan', null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.classschedule', verbose_name='Lớp học phần')),
                ('room', models.ForeignKey(db_column='IDPhong', null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.classrooms', verbose_name='Phòng thi')),
            ],
            options={
                'verbose_name': 'Lịch thi',
                'verbose_name_plural': 'Lịch thi',
                'db_table': 'DTBD_TKB_LichThi',
            },
        ),
        migrations.AddField(
            model_name='enrollment',
            name='student',
            field=models.ForeignKey(db_column='IDSinhVien', null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.student', verbose_name='Sinh viên'),
        ),
        migrations.AddField(
            model_name='enrollment',
            name='subject',
            field=models.ForeignKey(db_column='IDLopHocPhan', null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.subject', verbose_name='Học phần đăng ký'),
        ),
        migrations.AddField(
            model_name='classschedule',
            name='subject',
            field=models.ForeignKey(blank=True, db_column='IDMonHoc', null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.subject', verbose_name='Môn học'),
        ),
        migrations.CreateModel(
            name='AttendanceHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, db_column='NgayTao', editable=False, null=True, verbose_name='Thời điểm tạo')),
                ('updated_at', models.DateTimeField(auto_now_add=True, db_column='NgayCapNhat', verbose_name='Thời điểm cập nhật')),
                ('attendance_date', models.DateField(verbose_name='Ngày điểm danh')),
                ('staff', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Giảng viên')),
                ('timetable', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.timetables', verbose_name='Thời khóa biểu')),
            ],
            options={
                'verbose_name': 'Lịch sử điểm danh',
                'verbose_name_plural': 'Lịch sử điểm danh',
                'db_table': 'attendances_history',
            },
        ),
    ]
