from django.shortcuts import render 
from django.http import HttpResponse, JsonResponse 
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view 
from core.models.timetables import TimeTables
from core.serializers import TimeTablesSerializer 
from .auth_middleware import verify_admin, verify_token 

@api_view(['GET', 'POST'])
@verify_token 
@verify_admin
@csrf_exempt
def timetable_list(request):
    """
        List all TimeTables, or create a new TimeTables
    """
    if request.method == 'GET':
        timetables = TimeTables.objects.all()
        serializer = TimeTablesSerializer(timetables, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TimeTablesSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@verify_token 
@verify_admin
@csrf_exempt
def timetable_detail(request, pk):
    """
        Retrieve, update or delete a TimeTables
    """
    try:
        timetable = TimeTables.objects.get(pk=pk)
    except TimeTables.DoesNotExist:
        return JsonResponse({'message': 'Not found!'},status=404)
    
    if request.method == 'GET':
        serializer = TimeTablesSerializer(timetable)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TimeTablesSerializer(timetable, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'PATCH':
        data = JSONParser().parse(request)
        serializer = TimeTablesSerializer(timetable, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        timetable.delete()
        return JsonResponse({'message': 'Deleted successfully!'}, status=204)
