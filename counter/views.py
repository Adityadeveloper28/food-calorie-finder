from django.shortcuts import render

# 4pu7O+2MUmpvgYfS4+Z0gg==PAujuMB29Am481mR
def home(request):
  import requests

  import json
  
  if request.method == 'POST':
          query = request.POST['query']
          api_url ='https://api.api-ninjas.com/v1/nutrition?query=' 
          api_request = requests.get(api_url + query,headers={'X-Api-Key': '4pu7O+2MUmpvgYfS4+Z0gg==PAujuMB29Am481mR'})
          try:
               api = json.loads(api_request.content)
               print(api_request.content)
          except Exception as e:
               api= "oops!theres was an error"
               print(e)
          
          return render(request , 'home.html',{'api':api,'content' : True} )
  else:
          return render(request , 'home.html',{'query':'enter valid query','content': False} )

