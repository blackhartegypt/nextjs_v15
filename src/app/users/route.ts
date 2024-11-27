// route.ts is nextjs naming convention and all of them should be named like that 
//test the routers using thunder client 

export const users=[
    {id:1,name:"Kevin Kimani"},
    {id:2,name:"Martin Wambua"}
]

export async function GET(){
    return Response.json(users);
}

//add a new user using post method
export async function POST(request:Request){
    const user=await request.json();
    const newUser={
        id:users.length+1,
        name:user.name,
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser),{
        headers:{
            "Content-Type":"application/json",
        },
        status:201,
    })
}