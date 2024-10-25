from django.shortcuts import render, redirect 
from core.models.custom_user import CustomUser 
from django.contrib.auth import authenticate 
from django.views.decorators.csrf import csrf_exempt 
import jwt 
from django.http import JsonResponse 
from django.conf import settings 


def index(request):
    return redirect('/admin')


@csrf_exempt 
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # try:
        #     user = CustomUser.objects.get(username=username)
        # except CustomUser.DoesNotExist:
        #     return JsonResponse({
        #         'message': 'Tên tài khoản không tồn tại',
        #     }, status=404)
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            token_payload = {
                "id": user.id,
                "role": "manager" if user.role == "manager" else "staff"
            }
            token = jwt.encode(token_payload, settings.JWT_SECRET_KEY, settings.JWT_ALGORITHM)

            response = JsonResponse({
                "email": user.email if user.email else '',
                "username": username,
                "role": user.role
            })
            response.set_cookie("access_token", token, httponly=True)
            return response 
        else:
            return JsonResponse({'message': "Tên tài khoản hoặc mật khẩu không đúng!"})


@csrf_exempt 
def logout_view(request):
    if request.method == 'POST':
        response = JsonResponse({'message': "Đăng xuất thành công!"})
        response.delete_cookie('access_token')
        return response 
