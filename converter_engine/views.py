from django.shortcuts import render

def converter_engine_home(request):
    if request.method == 'POST':
        file = None
        return render(request, template_name='converter_home_page.html', returning_data={file:file})
    
    else:
       return render(request, template_name='converter_home_page.html') 