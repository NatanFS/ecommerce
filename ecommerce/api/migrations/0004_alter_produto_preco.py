# Generated by Django 4.1 on 2023-03-09 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_produto_image_produto_imagem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produto',
            name='preco',
            field=models.FloatField(),
        ),
    ]
