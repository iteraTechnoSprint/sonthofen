import urllib2
import json

from django.http import HttpResponse


def index(request):
    x = request.GET.get('x', '')
    y = request.GET.get('y', '')
    iteratec = urllib2.urlopen("http://www.iteratec.de").read()
    
    data = {'x': x, 'y': y, 'iteratec': iteratec}
    
    return HttpResponse(json.dumps(data), content_type='text/plain')
    