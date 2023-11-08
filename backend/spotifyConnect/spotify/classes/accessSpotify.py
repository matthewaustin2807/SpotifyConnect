import requests

class Spotify:
    def __init__(self, userId):
        self.userId = userId
        self._client_id = "27bbadf35c55477dbb275180797f50c4"
        self._client_secret = "3d10e01c7da349909e0715100ed1308e"
        self._token = self.getAccessToken()

    def getAccessToken(self):
        url = "https://accounts.spotify.com/api/token"
        headers = {
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        payload = {
            "grant_type" : "client_credentials",
            "client_id" : self._client_id,
            "client_secret" : self._client_secret
        }

        r = requests.post(url, headers=headers, data=payload)

        return r.json()["access_token"]


    def getAllPlaylists(self):
        url = f'https://api.spotify.com/v1/users/{self.userId}/playlists'
        headers = {
            "Authorization" : f'Bearer {self._token}'
        }
        r = requests.get(url, headers = headers)
        playlists = []
        counter = 1
        for playlist in r.json()['items']:
            object = {
                "id" : playlist['id'],
                "images" : playlist['images'][0] if len(playlist['images']) != 0 else None,
                "name" : playlist['name'],
                "owner" : {
                    "display_name" : playlist['owner']['display_name']
                }
            }
            playlists.append(object)
        return playlists


    def getSongsFromPlaylist(self):
        playlistId, playlistName = self.getPlaylistsID()
        url = f'https://api.spotify.com/v1/playlists/{playlistId}/tracks?limit=50'
        headers = {
            "Authorization" : f'Bearer {self._token}'
        }
        r = requests.get(url, headers=headers)

        allSongs = []

        totalSongs = r.json()["total"]
        while (len(allSongs) < totalSongs):
            offset = len(allSongs)
            payload = {
                "limit" : 50, 
                "offset" : offset,
                "fields" : "items(track(artists(name), name))"
            }
            r = requests.get(url, headers=headers, params=payload)
            allSongs.extend(r.json()["items"])

        artistTitle = {}

        for song in allSongs:
            artist = song["track"]["artists"][0]["name"]
            if (artist not in artistTitle.keys()):
                artistTitle[artist] = [song["track"]["name"]]
            else:
                artistTitle[artist].append(song["track"]["name"])
        
        return artistTitle, playlistName.replace(" ", "")