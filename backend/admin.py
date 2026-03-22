from django.contrib import admin
from .models import Bond

@admin.register(Bond)
class BondAdmin(admin.ModelAdmin):
    list_display = ('name', 'interest_rate', 'maturity_date')
