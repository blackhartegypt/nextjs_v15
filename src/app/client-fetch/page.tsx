"use client"
import {useState,useEffect} from "react";


type user={
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
}

export default function UsersClient(){
    const [users,setUsers] =useState<user[]>([]);
    const [loading,setLoading]=useState(true);
    const [error,setError] =useState("");

    useEffect(()=>{
        async function fetchUsers(){
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error ("Failed to fetch users");
                    const data=await response.json();
                    setUsers(data);
            }catch(err){
                setError("failed to fetch Users");
                if(err instanceof Error){
                    setError(`Failed to Fetch Users: ${err.message}`)
                }   
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[])

if (loading) return <div>Loading..</div>
if (error) return <div>Error</div>
    return(
        <ul className="space-y-4 p-4">
            {users.map((use)=>(
                <li key={use.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    {use.name}  and their email is {use.email}
                </li>
            ))}
        </ul>
    );

    
}