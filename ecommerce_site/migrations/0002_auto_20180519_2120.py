# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-19 21:20
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce_site', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productsize',
            old_name='model',
            new_name='product',
        ),
    ]