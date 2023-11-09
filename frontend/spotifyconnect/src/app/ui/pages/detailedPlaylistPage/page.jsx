import React from 'react';
import Header from '../../components/header';
import { Button } from '@mui/material';
import TrackTable from '../../components/trackTable';

const DetailedPlaylistPage = () => {
    const playlistName = 'Touch Your Feels'
    const playlistImg = 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947'
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

    return ( 
        <div className='flex flex-col justify-start h-screen bg-lightblack'>
            <div>
                <Header userId={"matthewaustin2807"}/>
            </div>
            <div className='flex flex-col h-screen'>
                <div id="playlist-description" className='flex w-screen h-2/6 bg-gradient-to-b from-playlistDetailStart to-playlistDetailEnd'>
                    <div id='playlist-image' className='my-3 flex justify-center items-center basis-3/12'>
                        <img src={playlistImg} className='w-48 h-48 rounded-lg'/>
                    </div>
                    <div id='playlist-title' className='flex flex-col justify-end basis-7/12'>
                        <h1 className='text-8xl mb-5 text-slate-50 font-bold'>{playlistName}</h1>
                    </div>
                    <div id='import-all' className='flex justify-center basis-2/12'>
                        <Button variant="contained" className='bg-spotifygreen w-7/12 self-end mb-8'>
                            Import All
                        </Button>
                    </div>
                </div>
                <div id="playlist-tracks" className='bg-gradient-to-b from-trackTableStart to-trackTableEnd border-2 border-lightblack w-screen h-screen'>
                    <TrackTable rows={playlistTracks}/>
                    <div id='import-selected' className='flex'>
                        <Button variant="contained" className='bg-spotifygreen w-38 ml-7 mt-3'>
                            Import Selected
                        </Button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DetailedPlaylistPage;