from django.db import models
import datetime

class Badge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    presenters = models.TextField()
    badge_class = models.CharField(max_length=100)
    badge_pin = models.IntegerField(max_length=10)

    #def json_data(self):
    #    data = {'id': self.pk,
    #            'name': self.name,
    #            'description': self.description,
    #            'presenters': self.presenters,
    #            'badge_class' : self.badge_class}
    #    return data

class User(models.Model):
    netid = models.CharField(max_length=8, unique=True)
    name = models.CharField(max_length=100)
    user_photo = models.CharField(max_length=100)

    #def json_data(self):
    #    data = {'id': self.pk,
    #            'name': self.name,
    #            'netid': self.netid,
    #            'photo_path': self.user_photo}
    #    return data


class BadgeAward(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    badge = models.ForeignKey('Badge')
    user = models.ForeignKey('User')
    
    #def json_data(self):
    #    return {"badge_class": self.badge.badge_class}
    
