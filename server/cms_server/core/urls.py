from django.urls import path 
from core.views.index import * 
from core.views.attendance import attendance_list, attendance_detail 
from core.views.classrooms import classrooms_list, classrooms_detail 
from core.views.custom_user import custom_user_list, custom_user_detail 
from core.views.enrollment import enrollment_list, enrollment_detail 
from core.views.exam import exam_list, exam_detail 
from core.views.grades import grade_list, grade_detail 
from core.views.semester import semester_list, semester_detail 
from core.views.student import student_list, student_detail 
from core.views.subject import subject_list, subject_detail 
from core.views.timetables import timetable_list, timetable_detail 
from core.views.class_schedule import class_schedule_list, class_schedule_detail


urlpatterns = [
    path('', index, name='index'),
    path('api/auth/login', login_view, name='login'),
    path('api/auth/logout', logout_view, name='logout'),
    path('api/attendance/', attendance_list, name='attendance-list'),
    path('api/attendance/<pk>', attendance_detail, name='attendance-detail'),
    path('api/classrooms/', classrooms_list, name='classroom-list'),
    path('api/classrooms/<pk>', classrooms_detail, name='classroom-detail'),
    path('api/user/', custom_user_list, name='user-list'),
    path('api/user/<pk>', custom_user_detail, name='user-detail'),
    path('api/enrollment/', enrollment_list, name='enrollment-list'),
    path('api/enrollment/<pk>', enrollment_detail, name='enrollment-detail'),
    path('api/exam/', exam_list, name='exam-list'),
    path('api/exam/<pk>', exam_detail, name='exam-detail'),
    path('api/grade/', grade_list, name='grade-list'),
    path('api/grade/<pk>', grade_detail, name='grade-detail'),
    path('api/semester/', semester_list, name='semester-list'),
    path('api/semester/<pk>', semester_detail, name='semester-detail'),
    path('api/student/', student_list, name='student-list'),
    path('api/student/<pk>', student_detail, name='student-detail'),
    path('api/subject/', subject_list, name='subject-list'),
    path('api/subject/<pk>', subject_detail, name='subject-detail'),
    path('api/timetable/', timetable_list, name='timetable-list'),
    path('api/timetable/<pk>', timetable_detail, name='timetable-detail'),
    path('api/class_schedule/', class_schedule_list, name='class-schedule-list'),
    path('api/class_schedule/<pk>', class_schedule_detail, name='class-schedule-detail'),
]

