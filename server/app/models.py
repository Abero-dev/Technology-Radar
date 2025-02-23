from django.db import models


class Entrie(models.Model):
    label = models.CharField(max_length=30, unique=True)
    quadrant = models.IntegerField()
    ring = models.IntegerField()
    active = models.BooleanField(default=True)
    moved = models.IntegerField(default=0)
    link = models.CharField(max_length=100)

    def __str__(self):
        return str(self.label)
