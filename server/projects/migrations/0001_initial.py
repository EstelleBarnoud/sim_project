# Generated by Django 2.0.6 on 2018-06-28 23:12

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('author', models.CharField(max_length=42)),
                ('date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date de création')),
                ('description', models.TextField()),
            ],
        ),
    ]