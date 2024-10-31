from rest_framework import serializers 
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


class AttendanceHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = AttendanceHistory
        fields = '__all__'


class ClassroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classrooms
        fields = '__all__'


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment 
        fields = '__all__'


class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exam 
        fields = '__all__'


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade 
        fields = '__all__'


class SemesterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Semester 
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student 
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject 
        fields = '__all__'


class TimeTablesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeTables 
        fields = '__all__'
