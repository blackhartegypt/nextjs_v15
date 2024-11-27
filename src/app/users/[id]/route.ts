import {users} from "../route";

export async function GET(_request:Request,{params}:{params:{id:string}}){
    const {id}=await params;
    const user=users.find((user)=>user.id === parseInt(id));
    return Response.json(user)
}

export async function DELETE(request:Request,{params}:{params:{id:string}}){
    const {id}=await params;
    const userIndex=users.findIndex((user)=>user.id === parseInt(id));

    if(userIndex === -1){
        return new Response(JSON.stringify({message:"user not found"}),{
            headers:{
                "Content-Type":"application/json"
            },
            status:404,
        })
    }

    const deletedUser=users.splice(userIndex,1);

    return new Response(JSON.stringify({message:"user deleted", user: deletedUser[0],remainingUsers:users}),{
        headers:{
            "Content-Type":"application/json"
        },
        status:200,
    })
}