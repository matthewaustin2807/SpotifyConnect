'use client';

import React from 'react';
import Header from '../../components/header';
import { Button } from '@mui/material';
import GraphicEqSharpIcon from '@mui/icons-material/GraphicEqSharp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TrackTable from '../../components/trackTable';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link'
import LoadingPage from '../loadingPage/page';

const DetailedPlaylistPage = () => {
    const playlistTracks = [
        {
            'id': 1,
            "added_at" : "12/12/12",
            "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
            "track_name" : "Test Track 1",
            "track_artist" : "Test Artist",
            "track_album" : "Test Album", 
            "track_duration" : 180000 //in ms
        },
        {
            'id' : 2,
            "added_at" : "12/12/12",
            "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
            "track_name" : "Test Track 2",
            "track_artist" : "Test Artist",
            "track_album" : "Test Album", 
            "track_duration" : 180000 //in ms
        },
        {
            'id' : 3,
            "added_at" : "12/12/12",
            "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
            "track_name" : "Test Track 3",
            "track_artist" : "Test Artist",
            "track_album" : "Test Album", 
            "track_duration" : 240000 //in ms
        },
        {
            'id' : 4,
            "added_at" : "12/12/12",
            "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
            "track_name" : "Test Track 2",
            "track_artist" : "Test Artist",
            "track_album" : "Test Album", 
            "track_duration" : 180000 //in ms
        },,
        {
            'id' : 5,
            "added_at" : "12/12/12",
            "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
            "track_name" : "Test Track 2",
            "track_artist" : "Test Artist",
            "track_album" : "Test Album", 
            "track_duration" : 180000 //in ms
        },,
        {
            'id' : 6,
            "added_at" : "12/12/12",
            "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
            "track_name" : "Test Track 2",
            "track_artist" : "Test Artist",
            "track_album" : "Test Album", 
            "track_duration" : 180000 //in ms
        },,
        {
            'id' : 7,
            "added_at" : "12/12/12",
            "image" : "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
            "track_name" : "Test Track 2",
            "track_artist" : "Test Artist",
            "track_album" : "Test Album", 
            "track_duration" : 180000 //in ms
        },
    ]
    const [tracks, setTracks] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const params = useSearchParams();
    const playlistId = params.get('playlistId');
    const userId = params.get('userId');
    const playlistImg = params.get('image');
    const playlistName = params.get('playlistName')

    React.useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        await axios.get(`http://127.0.0.1:8000/api/playlistDetails/?userId=${userId}&playlistId=${playlistId}`)
            .then((response) => {
                setTracks(response.data.tracks)
                setIsLoading(false)
                console.log(tracks)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    return isLoading ? (<LoadingPage/>) : ( 
        <div className='flex flex-col justify-start h-screen bg-lightblack'>
            <div>
                <Header userId={"matthewaustin2807"}/>
            </div>
            <div className='flex flex-col h-screen max-h-fit'>
                <div id="playlist-description" className='flex w-screen h-2/6 bg-gradient-to-b from-playlistDetailStart to-playlistDetailEnd'>
                    <div id='playlist-image' className='my-3 flex justify-center items-center basis-3/12'>
                        {
                            playlistImg != ""
                            ? <img src={playlistImg} className='w-48 h-48 rounded-lg'/> 
                            : <div className="flex justify-center items-center bg-cardPicture w-48 h-48 place-self-center rounded-lg">
                                <GraphicEqSharpIcon sx={{width:100, height:100}}/>
                            </div>
                        } 
                    </div>
                    <div id='playlist-title' className='flex flex-col justify-end basis-7/12'>
                        <h1 className='text-8xl mb-5 text-slate-50 font-bold'>{playlistName}</h1>
                    </div>
                    <div id='import-all' className='flex flex-col justify-between basis-2/12'>
                        <div className='self-end mr-4 mt-3'>
                            <Link href={{
                                pathname:'/ui/pages/playlistPage',
                                query: {
                                    userId: params.get('userId')
                                }
                            }}>   
                                <Button className='font-bold'>
                                    <ArrowBackIosNewIcon/> 
                                    Back
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Button variant="contained" className='bg-spotifygreen w-7/12 mb-5'>
                                Import All
                            </Button>
                        </div>
                    </div>
                </div>
                <div id="playlist-tracks" className='bg-gradient-to-b from-trackTableStart to-trackTableEnd border-2 border-lightblack w-screen h-fit max-h-fit'>
                    <TrackTable rows={tracks}/>
                    <div id='import-selected' className='flex'>
                        <Button variant="contained" className='bg-spotifygreen w-38 ml-7 mt-1 mb-4'>
                            Import Selected
                        </Button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DetailedPlaylistPage;