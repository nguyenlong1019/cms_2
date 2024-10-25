from django.shortcuts import render, redirect 
from core.models.custom_user import CustomUser 
from django.contrib.auth import authenticate 
from django.views.decorators.csrf import csrf_exempt 
import jwt 
from django.http import JsonResponse 
from django.conf import settings 
from django.contrib.auth import get_user_model 
import json 


def index(request):
    return redirect('/admin')


@csrf_exempt 
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        # print(username)
        # print(password)

        UserModel = get_user_model()
        print(UserModel)

        try:
            user = UserModel.objects.get(username=username)
        except UserModel.DoesNotExist:
            return JsonResponse({
                'message': 'Tên tài khoản không tồn tại',
            }, status=404)
        
        if user.check_password(password):
            token_payload = {
                "id": user.id,
                "role": "manager" if user.role == "manager" else "staff"
            }
            token = jwt.encode(token_payload, settings.JWT_SECRET_KEY, settings.JWT_ALGORITHM)

            response = JsonResponse({
                "email": user.email if user.email else '',
                "username": username,
                "role": user.role
            }, status=200)
            response.set_cookie("access_token", token, httponly=True)
            return response 
        else:
            return JsonResponse({'message': "Mật khẩu không đúng!"}, status=400)


@csrf_exempt 
def logout_view(request):
    if request.method == 'POST':
        response = JsonResponse({'message': "Đăng xuất thành công!"})
        response.delete_cookie('access_token')
        return response 
