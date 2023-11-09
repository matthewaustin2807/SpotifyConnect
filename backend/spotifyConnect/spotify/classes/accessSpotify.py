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


    def getSongsFromPlaylist(self, playlistId):
        url = f'https://api.spotify.com/v1/playlists/{playlistId}/tracks?limit=50'
        headers = {
            "Authorization" : f'Bearer {self._token}'
        }
        r = requests.get(url, headers=headers)

        print(r.json())

        allSongs = []
        totalSongs = r.json()["total"]
        while (len(allSongs) < totalSongs):
            offset = len(allSongs)
            payload = {
                "limit" : 50, 
                "offset" : offset,
                "fields" : "items(added_at, track(album(name, images), artists(name), duration_ms,  name))"
            }
            r = requests.get(url, headers=headers, params=payload)
            allSongs.extend(r.json()["items"])

        allTracks = []

        id = 1
        for songs in allSongs:
            track = {
                "id": id,
                "track_album" : songs['track']['album']['name'] if songs['track']['album'] != None else None,
                "track_name" : songs['track']['name'],
                "track_artist" : songs["track"]["artists"][0]["name"],
                "added_at" : songs['added_at'],
                "track_duration" : songs['track']['duration_ms'],
                "images" : songs['track']['album']['images'] if len(songs['track']['album']['images']) != 0 else None
            }
            allTracks.append(track)
            id += 1

        return allTracks