import PlaylistCard from './ui/components/playlistCard';
import LandingPage from './ui/pages/landingPage/page'
import PlaylistPage from './ui/pages/playlistPage/page';
import DetailedPlaylistPage from './ui/pages/detailedPlaylistPage/page';
import TrackTable from './ui/components/trackTable';
import Loading from './ui/pages/loadingPage/page';

const Page = () => {

  return (
    <div className="overflow-hidden">
      <LandingPage/>
    </div>
  )
}

export default Page;