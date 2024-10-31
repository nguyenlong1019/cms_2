from django.shortcuts import render 
from django.http import HttpResponse, JsonResponse 
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view 
from core.models.grades import Grade 
from core.serializers import GradeSerializer 
from .auth_middleware import verify_admin, verify_token 

@api_view(['GET', 'POST'])
@verify_token 
@verify_admin
@csrf_exempt
def grade_list(request):
    """
        List all grade, or create a new grade
    """
    if request.method == 'GET':
        grades = Grade.objects.all()
        serializer = GradeSerializer(grades, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = GradeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@verify_token 
@verify_admin
@csrf_exempt
def grade_detail(request, pk):
    """
        Retrieve, update or delete a grade
    """
    try:
        grade = Grade.objects.get(pk=pk)
    except Grade.DoesNotExist:
        return JsonResponse({'message': 'Not found!'},status=404)
    
    if request.method == 'GET':
        serializer = GradeSerializer(grade)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = GradeSerializer(grade, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'PATCH':
        data = JSONParser().parse(request)
        serializer = GradeSerializer(grade, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        grade.delete()
        return JsonResponse({'message': 'Deleted successfully!'}, status=204)
