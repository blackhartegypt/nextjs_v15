"use client"
import {useRouter} from "next/navigation";

export default function About(){
    const router=useRouter();

    return(
        <>

            <h2>This is the basic file Routing In the About Page</h2>
            <button onClick={()=>router.push("/")} className="bg-blue-500 text-white p-2 rounded-md">Go Home</button>
        </>
        

    )
}