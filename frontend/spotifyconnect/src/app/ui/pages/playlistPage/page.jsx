'use client';

import {React, useState, useEffect} from 'react'

import axios from 'axios'

import PlaylistCard from '../../components/playlistCard';
import Header from '../../components/header'
import { ImageList, ImageListItem, Stack, Button, Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DataGrid } from '@mui/x-data-grid'
import { useSearchParams } from 'next/navigation';

const PlaylistPage = ({use}) => {
    const params = useSearchParams()
    const [playlists, setPlaylists] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData(params.get('userId'))
    },[])

    const fetchData = async (userId) => {
        await axios.post('http://127.0.0.1:8000/api/playlists/', {
            "userId": userId
        })
        .then((response) => {
            setPlaylists(response.data)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return isLoading ? (<div>Loading</div>) : (
        <div className="flex flex-col justify-start max-h-screen h-screen bg-lightblack">
            <div>
                <Header userId={params.get('userId')}/>
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
