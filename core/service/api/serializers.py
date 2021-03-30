from rest_framework import serializers
from service.models import User, VacationDays

class VacationDaysSerializar(serializers.ModelSerializer):
    class Meta:
        model = VacationDays
        fields = ('day', 'description')

class UserSerializer(serializers.ModelSerializer):
    # vacations_taken = serializers.StringRelatedField(many=True)
    vacations_taken = VacationDaysSerializar(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'user', 'email', 'id_number', 'phone_number', 'start_day', 'vacations_taken')