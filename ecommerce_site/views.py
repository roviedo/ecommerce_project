from django.http import HttpResponse

from .models import Product, ProductSize
from rest_framework import viewsets
from .serializers import ProductSerializer, ProductSizeSerializer
from django.shortcuts import render


# def index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")

def index(request):
      return render(request, 'index.html', context={"test": "hey there"})


class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows products to be viewed or edited.
    """
    queryset = Product.objects.all().order_by('-pub_date')
    serializer_class = ProductSerializer


class ProductSizeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows ProductSize to be viewed or edited.
    """
    queryset = ProductSize.objects.all()
    serializer_class = ProductSizeSerializer