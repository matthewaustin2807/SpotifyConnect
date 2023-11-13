'use client';
import { CircularProgress } from "@mui/material";

const LoadingPage = () => {
    return ( 
        <div className="flex justify-center w-screen h-screen bg-lightblack">
            <div className="flex justify-center self-center w-32 h-32">
                <CircularProgress className="self-center" color="success" size={64}/>
            </div>
        </div>
    );
}
 
export default LoadingPage;