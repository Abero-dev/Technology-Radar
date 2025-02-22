from rest_framework import serializers
from .models import Entrie

class EntrieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entrie
        fields = '__all__'