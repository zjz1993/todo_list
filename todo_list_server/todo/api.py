from todo.models import Book
from todo.models import Task
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import generics

#序列化器
from rest_framework import serializers

from rest_framework.response import Response
from rest_framework.decorators import api_view

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

@api_view(['GET', 'POST', 'DELETE', 'PUT'])
def task(request):
    if request.method == 'GET':
        # query_params = request.query_params.dict()
        # print(query_params)
        task_list = Task.objects.filter()
        serializer = TaskSerializer(task_list, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TaskSerializer(Task.objects.get(), data=data)
        # task_list = Task.objects.all()
        # serializer = TaskSerializer(task_list, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        query_params = request.query_params.dict()
        print(request.query_params)
        task_list = Task.objects.filter(id=1)
        # serializer = TaskSerializer(task_list, many=True)
        task_list.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def getTask(request):
    if request.method == 'GET':
        print(request.GET['id'])
        # query_params = request.query_params.dict()
        # print(query_params)
        task_list = Task.objects.filter(id=request.GET['id'])
        serializer = TaskSerializer(task_list, many=True)
        return Response(serializer.data)

@api_view(['PUT'])
def putTask(request):
    if request.method == 'PUT':
        print(request.data)
        # data = JSONParser().parse(request)
        serializer = TaskSerializer(Task.objects.get(id=request.data['id']), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def deleteTask(request):
    if request.method == 'GET':
        task_list = Task.objects.filter(id=request.GET['id'])
        # serializer = TaskSerializer(task_list, many=True)
        task_list.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def finishTask(request):
    if request.method == 'GET':
        task_list = Task.objects.filter(id=request.GET['id'])
        # serializer = TaskSerializer(task_list, many=True)
        task_list.update(isFinished=True)
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def getFinishTask(request):
    if request.method == 'GET':
        task_list = Task.objects.filter(isFinished=True)
        serializer = TaskSerializer(task_list, many=True)
        return Response(serializer.data)

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

@api_view(['GET'])
def book(request):
    book_list = Book.objects.all()
    serializer = BookSerializer(book_list, many=True)
    return Response(serializer.data)