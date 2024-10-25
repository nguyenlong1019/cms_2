import jwt 
from django.http import JsonResponse 
from django.conf import settings 
from functools import wraps 


def verify_token(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        token = request.COOKIES.get('access_token')
        if not token:
            return JsonResponse({
                'message': "Not authenticated!"
            }, status=401)
        
        try:
            decoded_token = jwt.decode(token, settings.JWT_SECRET_KEY, settings.JWT_ALGORITHM)
            request.user = decoded_token 
        except jwt.InvalidTokenError:
            return JsonResponse({
                'message': 'Invalid token!'
            }, status=403)
        
        return view_func(request, *args, **kwargs) 
    return _wrapped_view 
        

def verify_admin(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if request.user.get("role") != "admin":
            return JsonResponse({
                "message": "You do not have permission to perform this action."
            }, status=403)
        return view_func(request, *args, **kwargs)
    return _wrapped_view 

