from django.contrib import admin
from core.models.province import * 
from core.models.major import * 
from core.models.classroom import * 
from core.models.program import * 
from core.models.semester import * 
from core.models.subject import * 
from core.models.student import * 
from core.models.school_year import * 
from core.models.career import * 
from core.models.training_type import * 
from core.models.training_sys import *
from core.models.subject_type import * 


@admin.register(Province)
class ProvinceAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Major)
class MajorAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Classroom)
class ClassroomAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Semester)
class SemesterAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(SchoolYear)
class SchoolYearAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(TrainingType)
class TrainingTypeAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(TrainingSys)
class TrainingSysAdmin(admin.ModelAdmin):
    search_fields = ['id',]


@admin.register(SubjectType)
class SubjectTypeAdmin(admin.ModelAdmin):
    search_fields = ['id',]
