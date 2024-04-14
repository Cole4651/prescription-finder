from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the api index.")

import json
from django.core import serializers

def getObject(request, id):
    obj = MyModel.objects.get(pk=id)
    data = serializers.serialize('json', [obj,])
    struct = json.loads(data)
    data = json.dumps(struct[0])
    return HttpResponse(data, mimetype='application/json')

