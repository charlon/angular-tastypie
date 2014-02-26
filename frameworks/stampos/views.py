from django.shortcuts import render

from .models import Badge

# Create your views here.

from rest_framework import generics


class BadgeList(generics.ListCreateAPIView):
    model = Badge

class BadgeDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Badge