# Generated by Django 2.1.1 on 2018-09-21 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_book'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, null=True)),
                ('createTime', models.DateField(null=True)),
                ('startTime', models.DateField(null=True)),
                ('isFinished', models.BooleanField()),
                ('priority', models.IntegerField(choices=[(0, '紧急'), (1, '一般'), (2, '不紧急')])),
            ],
        ),
    ]
