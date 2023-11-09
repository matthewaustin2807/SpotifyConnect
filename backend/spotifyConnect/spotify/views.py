import sys
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from .classes.accessSpotify import Spotify

# Create your views here.
@api_view(['POST'])
def displayPlaylists(request):
    userId = request.data['userId']
    spotifyObject = Spotify(userId)
    playlists = spotifyObject.getAllPlaylists()
    return Response({'playlists': playlists})

@api_view(['GET'])
def getPlaylistDetails(request):
    playlistId = request.GET['playlistId']
    userId = request.GET['userId']
    spotifyObject = Spotify(userId)
    allTracks = spotifyObject.getSongsFromPlaylist(playlistId)
    return Response({'tracks': allTracks})

