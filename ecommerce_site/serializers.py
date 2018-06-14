from .models import Product, ProductSize
from rest_framework import serializers


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('price', 'weight', 'dimensions', 'pub_date', 'description', 'image_url', 'image_string')


class ProductSizeSerializer(serializers.HyperlinkedModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = ProductSize
        fields = ('sku', 'size', 'product')