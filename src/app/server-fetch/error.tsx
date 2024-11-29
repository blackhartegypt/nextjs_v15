"use client"
import {useEffect} from "react";


export default function ErrorMessage({error}:{error:Error}){
    useEffect(()=>{
        console.log(error);

    },[error])
    return(
       <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-red-500">Error fetching users from the server component</div>
       </div>
    )
}