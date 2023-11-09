import PlaylistCard from './ui/components/playlistCard';
import LandingPage from './ui/pages/landingPage/page'
import PlaylistPage from './ui/pages/playlistPage/page';
import DetailedPlaylistPage from './ui/pages/detailedPlaylistPage/page';
import TrackTable from './ui/components/trackTable';

const Page = () => {
  const data = [
    {
        "id": 0,
        "added_at" : "12/12/12",
        "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
        "track_name" : "Test Track",
        "track_artist" : "Test Artist",
        "track_album" : "Test Album", 
        "track_duration" : 180000 //in ms
    },
    {
        "id": 1,
        "added_at" : "12/12/12",
        "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
        "track_name" : "Test Track",
        "track_artist" : "Test Artist",
        "track_album" : "Test Album", 
        "track_duration" : 180000 //in ms
    },
    {
        "id": 2,
        "added_at" : "12/12/12",
        "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
        "track_name" : "Test Track",
        "track_artist" : "Test Artist",
        "track_album" : "Test Album", 
        "track_duration" : 180000 //in ms
    }
]
  return (
    <div className="overflow-hidden">
      <DetailedPlaylistPage/>
    </div>
  )
}

export default Page;