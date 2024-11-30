"use client";
//to avoid refreshing if you need data in the same path import revalidatePath from next/cache call it without invoking and specify the path you want to revalidate 
import {useRouter} from "next/navigation";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../configurations/firebaseconfig";

interface FormData {
  age: number;
  name: string;
  residence: string;
}

export default function EditUsers() {
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    name: "",
    residence: "",
  });
const router=useRouter();
const [isLoading,setIsLoading]=useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "age" ? Number(value) : value, 
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        age: formData.age,
        name: formData.name,
        residence: formData.residence,
      });
      console.log(`Document created with ID: ${docRef.id}`);
      router.push("/admin-users")
    } catch (err) {
      console.error("Error adding document:", err);
    }finally{
        setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          User Information Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age || ""}
              onChange={handleChange}
              className=" text-gray-500  w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter age"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" text-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Residence
            </label>
            <input
              type="text"
              name="residence"
              value={formData.residence}
              onChange={handleChange}
              className="text-gray-500  w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter residence"
              required
            />
          </div>
          <div className="text-center">
          <button
              type="submit"
              className={`w-full py-2 rounded-md focus:outline-none focus:ring-2 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
