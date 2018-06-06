# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

from django.db import models


class Product(models.Model):
		#SKU, PRicing, stock, weight, dimensions, size
    #question = models.ForeignKey(Question, on_delete=models.CASCADE)
    #choice_text = models.CharField(max_length=200)
    #votes = models.IntegerField(default=0)

    price = models.CharField(max_length=200)
    weight = models.CharField(max_length=200)
    dimensions = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    description = models.CharField(max_length=200)
    image_url = models.CharField(max_length=200)
    image_string = models.TextField(blank=True)

    def __unicode__(self):
        return 'Product ' + self.description
    

class ProductSize(models.Model):
    sku = models.CharField(max_length=200)
    size = models.CharField(max_length=200)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __unicode__(self):
        return self.product.description + ' size: ' +  self.size

