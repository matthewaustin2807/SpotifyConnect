from django.urls import path
from . import views

urlpatterns = [
    path('playlists/', views.displayPlaylists, name='playlists'),
    path('playlistDetails/', views.getPlaylistDetails, name='playlistDetails')
]