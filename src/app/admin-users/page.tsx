import {doc,getDoc,getDocs,collection} from "firebase/firestore"
import {db} from "../configurations/firebaseconfig";

interface user{
   age:number;
   name:string;
   residence:string;
}

interface allUsers extends user{
    id:string;
}

export default async function FirebaseUsers(){
    const docRef=doc(db,"users","VklFjnlOnygDEJF6sKdd");
    const docSnap=await getDoc(docRef);

    if(docSnap.exists()){
        console.log(docSnap.data());
    }else{
        console.log("no document with such name available")
    }
    
    const querySnapshot=await getDocs(collection(db,"users"));
    const results:allUsers[]=querySnapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    } as allUsers))


    return(
        
        <>
      <h2 className="text-2xl font-semibold text-center mb-6">User Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => (
          <div key={result.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Name: {result.name}</h3>
            <p className="text-gray-600">Age: {result.age}</p>
            <p className="text-gray-600">Residence: {result.residence}</p>
          </div>
        ))}
      </div>
    </>
       
    )

}
