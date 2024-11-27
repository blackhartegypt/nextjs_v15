
"use client"
import { useState } from "react"

export const Counter=()=>{

    const [count,setCount]=useState(0);
    console.log("This is  client component and it will be rendred on the server only once")
    return(
       <button onClick={()=>setCount(count+1)}>Button Has been Clicked {count} times</button>
    )
}