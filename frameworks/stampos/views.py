from django.shortcuts import render

from .models import Badge, BadgeSerializer

# Create your views here.

from rest_framework import generics

class BadgeList(generics.ListCreateAPIView):

    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    paginate_by = 100
    paginate_by_param = 'page_size' # Allow client to override, using `?page_size=xxx`.
    max_paginate_by = 100
    
class BadgeDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Badge

