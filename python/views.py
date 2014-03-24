from django.http import HttpResponse

def index(request):
    param1 = request.GET.get('param1', '')
    param2 = request.GET.get('param2', '')
    return HttpResponse(param1 + "," + param2)
    