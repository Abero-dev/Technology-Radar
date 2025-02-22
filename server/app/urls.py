from django.urls import path
from .views import ListCreateEntrie, RetrieveUpdateDestroyEntrie

urlpatterns = [
    path('entries/', ListCreateEntrie.as_view(), name="list-create-entrie"),
    path('entries/<int:pk>/', RetrieveUpdateDestroyEntrie.as_view(), name="retrieve-update-destroy"),
]
