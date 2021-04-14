from rest_framework import serializers
from service.models import User, VacationDays


class DaySerializar(serializers.ModelSerializer):
    class Meta:
        model = VacationDays
        fields = ('id', 'user', 'day', 'description')


class UserSerializer(serializers.ModelSerializer):
    vacations_taken = DaySerializar(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'user', 'email', 'id_number',
                  'phone_number', 'start_day', 'vacations_taken')
