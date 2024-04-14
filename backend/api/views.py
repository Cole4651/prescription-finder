from django.shortcuts import render

from .models import TrackedMed
# Create your views here.
from django.http import HttpResponse

# user auth
from propelauth_py import init_base_auth, UnauthorizedException

import dotenv, os

dotenv.load_dotenv()
# print(os.getenv("REACT_APP_AUTH_URL"))

auth = init_base_auth(
    os.getenv("REACT_APP_AUTH_URL"),
    os.getenv("PROPEL_API_KEY")
)


import json
from django.core import serializers

# def getUserData(request, user_id):
#     obj = TrackedMed.objects.get(user=user_id)
#     data = serializers.serialize('json', [obj,])
#     struct = json.loads(data)
#     data = json.dumps(struct[0])
#     return HttpResponse(data, mimetype='application/json')

# hack for demo
from .users import users

def getUser(request):
    auth_header = request.META.get('HTTP_AUTHORIZATION')
    try:
        user = auth.validate_access_token_and_get_user(auth_header)
        print("Logged in as", user.user_id)
        
        return getUserData(request, user)
        # return HttpResponse(user.user_id)
    except UnauthorizedException:
        print("Invalid access token")
        return HttpResponse("invalid access", status=401)


def index(request):
    return HttpResponse("Hello, world. You're at the api index.")

