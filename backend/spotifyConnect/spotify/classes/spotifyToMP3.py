from accessSpotify import Spotify
from importMp3 import Importer

def main():
    spotify = Spotify("matthewaustin2807")
    artistAndTitle, playlistName = spotify.getSongsFromPlaylist()
    
    importer = Importer(f'./Downloads/{playlistName}')
    importer.importMP3(artistAndTitle)

if __name__ == "__main__":
    main()
    
