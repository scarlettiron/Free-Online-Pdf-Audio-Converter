from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from .converter_class import PdfAudioConverter as Converter
from .models import ConvertedFile
from .serializers import ConvertedFileSerializer


def converter_engine_home(request):
    if request.method == 'POST':
        file = None
        return render(request, template_name='converter_home_page.html', returning_data={file:file})
    
    else:
       return render(request, template_name='converter_home_page.html')
   

class ConverterEngineRest(generics.ListCreateAPIView):
    model = ConvertedFile
    queryset = ConvertedFile.objects.all()
    
    def post(self, request, format=None, *args, **kwargs):
        supported_audio_types = ['mp3', 'wav']
        file = self.request.FILES.get('file')
        print(file.content_type)
        if not file:
           return Response({'error':'File Required'}, status = 401)
        
        file_type = file.content_type.split('/')[-1]
        print(file_type)
        if file_type not in supported_audio_types and file_type != 'pdf':
            return Response({'error':'supported file types are: .pdf, .mp3, .wav'}, status=401)
        
        conv = Converter(file_path=file)
        
        converted_file = None
        
        if file_type == 'pdf':
            converted_file = conv.pdf_to_text().save_pdf_as_audio().file_path
            
        ''' if file_type == 'mp3' or file_type == 'wav':
            converted_file =  '''
        if not converted_file:
            return Response({'error': 'unable to convert file'},
                            status = 402)
            
        print('about to call serilaizer')
        #serializer = ConvertedFileSerializer(data = {'file':converted_file})
        #if serializer.is_valid():
         #   return_file = serializer.data
        return Response({'file':converted_file}, status = 204)
        #return Response(status=400)
            
        
        
            
       