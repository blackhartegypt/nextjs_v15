//fetching data on server components 
//server component are asynchronous in nature so can use async in them 

type user={
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
}
export default async function UsersServer(){
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await res.json();

    return(
        <ul className="space-y-4 p-4">
           {users.map((us:user)=>(
            <li key={us.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                {us.name} email: {us.email}  phone:{us.phone}
            </li>
           ))}
            
        </ul>
    )
}