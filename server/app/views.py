from django.shortcuts import render
from .models import Entrie
from .serializers import EntrieSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

# Create your views here.

class ListCreateEntrie(ListCreateAPIView):
    queryset = Entrie.objects.all()
    serializer_class = EntrieSerializer

class RetrieveUpdateDestroyEntrie(RetrieveUpdateDestroyAPIView):
    queryset = Entrie.objects.all()
    serializer_class = EntrieSerializer
