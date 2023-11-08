'use client';

import {React} from 'react'

import PlaylistCard from '../components/playlistCard';
import Header from '../components/header'
import { ImageList, ImageListItem, Stack, Button, Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DataGrid } from '@mui/x-data-grid'

const PlaylistPage = () => {
    const playlists = {
            "playlists": [
                {
                    "id": "0mxXGlYiXlAHQNSz8yXr8Z",
                    "images": {
                        "height": 640,
                        "url": "https://mosaic.scdn.co/640/ab67616d0000b2731bfcafa3cd3b186c0cde7cc0ab67616d0000b27320ea43861be3a9df012f9a71ab67616d0000b273312ccd659e743ea1e31f6275ab67616d0000b273f176846c64acf3cb210d2ab7",
                        "width": 640
                    },
                    "name": "Lolla Ready",
                    "owner" : {
                        "display_name": "matthewaustin2807"
                    }
                },
                {
                    "id": "34APYOf7Zue8T0J1lCxl4O",
                    "images": {
                        "height": 640,
                        "url": "https://mosaic.scdn.co/640/ab67616d0000b2730cd5f1a6dec7beca33bcc30cab67616d0000b2732d33cb2740101f8df29e3a0cab67616d0000b273934358af8dc21f378b7e8e05ab67616d0000b273de8177ecbfcd8d8e71692fe8",
                        "width": 640
                    },
                    "name": "Its a TRAP!",
                    "owner" : {
                        "display_name": "matthewaustin2807"
                    }
                },
                {
                    "id": "6GY6HIhfWrNRXl1RAR36dR",
                    "images": {
                        "height": 640,
                        "url": "https://mosaic.scdn.co/640/ab67616d0000b27335de3845e9c999ae1a6c18bcab67616d0000b27368fc00255ef7c81b044cb70aab67616d0000b273dabd5e7d35f02b407069ce14ab67616d0000b273f92feff277e875d7e6f6302e",
                        "width": 640
                    },
                    "name": "House",
                    "owner" : {
                        "display_name": "matthewaustin2807"
                    }
                },
                {
                    "id": "3Tvct8qcONewKpcdi5qWab",
                    "images": {
                        "height": 640,
                        "url": "https://mosaic.scdn.co/640/ab67616d0000b2730cdb4b03fd27a1301592a5e3ab67616d0000b273e139bf2ed8a27f311d66214fab67616d0000b273e661c05b66f93ae82583cafaab67616d0000b273f5128a5eb0b7cf147837a356",
                        "width": 640
                    },
                    "name": "Chill",
                    "owner" : {
                        "display_name": "matthewaustin2807"
                    }
                },
                {
                    "id": "2GjL6eMNEqp6fPVhAGyta7",
                    "images": {
                        "height": null,
                        "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
                        "width": null
                    },
                    "name": "Touch Your Feels",
                    "owner" : {
                        "display_name": "matthewaustin2807"
                    }
                },
                {
                    "id": "2GjL6eMNEqp6fPVhAGyta7",
                    "images": {
                        "height": null,
                        "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb2674542542fc567bf04d5947",
                        "width": null
                    },
                    "name": "Touch Your Feels",
                    "owner" : {
                        "display_name": "matthewaustin2807"
                    }
                }
            ]
    }

    return (
        <div className="flex flex-col justify-start max-h-screen h-screen bg-lightblack">
            <div>
                <Header/>
            </div>
            <div className='flex flex-col bg-lightblack w-screen h-max'>
                <div id="playlistPictureContainer" className="w-screen h-fit">
                    <h2 className='font-sans text-slate-50 text-5xl ml-10 mt-5'>Choose Playlists</h2>
                    <div id="playlistPictures" className="flex justify-start">
                        <ImageList className="mx-7 mb-5 w-screen" cols={5} rowHeight={320}>
                            {
                                playlists["playlists"].map((item, index) => (
                                    <ImageListItem key={index} sx={{width:200}}>
                                        <PlaylistCard playlistDetails={item}/>
                                    </ImageListItem>
                                ))
                            }
                        </ImageList>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage
