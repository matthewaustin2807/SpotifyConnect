"use client";
import { ReactDOM, React, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from 'axios'
import PlaylistPage from "../playlistPage/page";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LandingPage = () => {
    const [userId, setUserId] = useState("");

    return (
        <div className="flex flex-row gap-4 justify-center bg-lightblack h-screen w-screen">
            <div id="signIn" className="flex flex-col justify-center w-full pl-8">
                <span className="basis-auto relative mb-5 inset-x-2">
                    <h1 className="text-spotifygreen text-7xl inline font-bold">Spotify</h1>
                    <h1 className="text-spotifygreen text-7xl inline font-thin">Connect!</h1>
                </span>
                <div className="pl-2">
                    <h3 className="text-slate-50">User ID:</h3>
                    <TextField
                        required
                        onChange={(e) => {
                            setUserId(e.target.value)
                        }}
                        id="outlined-basic"
                        className="bg-white w-1/2 relative my-2 rounded-lg"/>
                </div>
                
                <Button variant="contained" className="w-1/6 left-2 inset-y-2 bg-spotifygreen">
                    <Link href={`/ui/pages/playlistPage?userId=${userId}`}>
                        Connect!
                    </Link>
                </Button>
            </div>
            <div id="picture" className=" relative h-full w-full">
                <img src={"/images/spotifyLogo.png"} className="absolute w-5/6 top-28 left-6 " />
            </div>
        </div>
    );
};

export default LandingPage;