from django.db import models


class User(models.Model):
    user = models.CharField(max_length=120)
    email = models.EmailField(max_length=120, unique=True)
    id_number = models.CharField(max_length=120, unique=True)
    phone_number = models.CharField(max_length=120)
    start_day = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.user


class VacationDays(models.Model):
    user = models.ForeignKey(
        'User',
        related_name='vacations_taken',
        on_delete=models.CASCADE
    )
    day = models.DateField(auto_now=False, auto_now_add=False)
    description = models.TextField()

    def __str__(self):
        # return self.day.strftime("%d/%m/%Y")
        return '{}: {}'.format(self.user, self.day)
