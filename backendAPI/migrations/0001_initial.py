# Generated by Django 2.0.4 on 2018-04-27 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=160)),
                ('date', models.DateField(auto_now=True)),
                ('desc', models.TextField()),
                ('pics', models.ImageField(upload_to='')),
            ],
        ),
    ]