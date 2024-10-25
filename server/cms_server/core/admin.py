from django.contrib import admin 
from core.models.attendance import AttendanceHistory 
from core.models.classrooms import Classrooms 
from core.models.custom_user import CustomUser 
from core.models.enrollments import Enrollment 
from core.models.exam import Exam 
from core.models.grades import Grade 
from core.models.semester import Semester 
from core.models.student import Student 
from core.models.subject import Subject 
from core.models.timetables import TimeTables 
from django.contrib.auth.admin import UserAdmin 


@admin.register(AttendanceHistory)
class AttendanceHistoryAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Classrooms)
class ClassroomAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Exam)
class ExamAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Semester)
class SemesterAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(TimeTables)
class TimeTablesAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('id', 'username', 'email', 'role', 'is_staff', 'is_superuser', 'is_active')
    search_fields = ('username', 'email', 'role')
    list_editable = ('role', 'is_staff', 'is_active', 'is_superuser')
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', 'role')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

