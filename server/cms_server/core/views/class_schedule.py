from django.shortcuts import render 
from django.http import HttpResponse, JsonResponse 
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view 
from core.models.class_schedule import ClassSchedule
from core.serializers import ClassScheduleSerializer 
from .auth_middleware import verify_admin, verify_token 

@api_view(['GET', 'POST'])
@verify_token 
@verify_admin
@csrf_exempt
def class_schedule_list(request):
    """
        List all Class Schedule, or create a new Class Schedule
    """
    if request.method == 'GET':
        clss = ClassSchedule.objects.all()
        serializer = ClassScheduleSerializer(clss, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ClassScheduleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@verify_token 
@verify_admin
@csrf_exempt
def class_schedule_detail(request, pk):
    """
        Retrieve, update or delete a Class Schedule
    """
    try:
        clss = ClassSchedule.objects.get(pk=pk)
    except ClassSchedule.DoesNotExist:
        return JsonResponse({'message': 'Not found!'},status=404)
    
    if request.method == 'GET':
        serializer = ClassScheduleSerializer(clss)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ClassScheduleSerializer(clss, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'PATCH':
        data = JSONParser().parse(request)
        serializer = ClassScheduleSerializer(clss, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        clss.delete()
        return JsonResponse({'message': 'Deleted successfully!'}, status=204)
