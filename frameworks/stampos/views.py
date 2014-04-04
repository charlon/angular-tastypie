from django.shortcuts import render

from .models import Badge, BadgeSerializer

# Create your views here.

from rest_framework import generics

class BadgeList(generics.ListCreateAPIView):

    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    paginate_by = 100
    
class BadgeDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Badge

