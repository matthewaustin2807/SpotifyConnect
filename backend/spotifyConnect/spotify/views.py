import sys
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from .classes.accessSpotify import Spotify

# Create your views here.
@api_view(['POST'])
def displayPlaylists(request):
    print(request.data)
    userId = request.data['userId']
    spotifyObject = Spotify(userId)
    playlists = spotifyObject.getAllPlaylists()
    return Response({'playlists': playlists})
