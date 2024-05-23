from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from graphene_django.views import GraphQLView
from django.http import JsonResponse

class CustomGraphQLView(GraphQLView):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
    
@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({'message': 'CSRF cookie set'})
