'use client'
import * as React from 'react'
import GraphicEqSharpIcon from '@mui/icons-material/GraphicEqSharp';

const PlaylistCard = ({playlistDetails}) => {
    return (
        <div className="flex flex-col mt-4 mb-4 w-56 h-72 bg-cardBackground rounded-lg">
            {
                playlistDetails["images"] != null ? 
                <img src={playlistDetails["images"]["url"]} className="bg-cardPicture w-48 h-44 mt-5 place-self-center rounded-sm"/> :
                <div className="flex justify-center items-center bg-cardPicture w-48 h-44 mt-5 place-self-center rounded-sm">
                    <GraphicEqSharpIcon sx={{width:100, height:100}} className=""/>
                </div>
            }
            <h3 className="ml-4 mt-3 text-slate-50 font-bold">{playlistDetails["name"]}</h3>
            <h5 className='ml-4 mt-1 text-slate-50 font-thin'>By {playlistDetails["owner"]["display_name"]}</h5>
        </div>
    )
}

export default PlaylistCard;