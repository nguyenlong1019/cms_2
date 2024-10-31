from django.shortcuts import render 
from django.http import HttpResponse, JsonResponse 
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view 
from core.models.semester import Semester
from core.serializers import SemesterSerializer 
from .auth_middleware import verify_admin, verify_token 

@api_view(['GET', 'POST'])
@verify_token 
@verify_admin
@csrf_exempt
def semester_list(request):
    """
        List all semester, or create a new semester
    """
    if request.method == 'GET':
        sems = Semester.objects.all()
        serializer = SemesterSerializer(sems, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SemesterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@verify_token 
@verify_admin
@csrf_exempt
def semester_detail(request, pk):
    """
        Retrieve, update or delete a semester 
    """
    try:
        sem = Semester.objects.get(pk=pk)
    except Semester.DoesNotExist:
        return JsonResponse({'message': 'Not found!'},status=404)
    
    if request.method == 'GET':
        serializer = SemesterSerializer(sem)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = SemesterSerializer(sem, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'PATCH':
        data = JSONParser().parse(request)
        serializer = SemesterSerializer(sem, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        sem.delete()
        return JsonResponse({'message': 'Deleted successfully!'}, status=204)
