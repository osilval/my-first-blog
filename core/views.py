from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'core/home.html')

def nosotros(request):
    return render(request,'core/nosotros.html')

def carta(request):
    return render(request,'core/carta.html')

def contactanos(request):
    return render(request,'core/contactanos.html')
