# Generated by Django 4.1 on 2023-03-09 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_produto_imagem_produto_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produto',
            name='image',
        ),
        migrations.AddField(
            model_name='produto',
            name='imagem',
            field=models.FileField(default='', upload_to='produtos/'),
            preserve_default=False,
        ),
    ]