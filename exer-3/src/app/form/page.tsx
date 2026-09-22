"use client"
import { useActionState } from "react";
import {Action} from "../action/action";

const initialState = {
    sucessful: false,
    error: "",
    email: "",
    password: "",
    message: {
        message: "",
        user: ""
    }
}



export default function FormPage() {

    const [formState, setFormState] = useActionState(Action, initialState); 

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="bg-gray-100 w-1/3 p-4">

    
            <h1 className="text-4xl font-bold mb-4">Form Page</h1>
            <form action={setFormState} method="post" className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input type="email" name="email" id="email"  className="w-full px-3 py-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                    <input type="password" name="password" id="password"  className="w-full px-3 py-2 border rounded
       " />       </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            </form>

            {
                formState.sucessful ? (
                    <div className="mt-4">
                    <p className="text-green-400">{formState.message.message}</p>
                    <p className="text-gray-600">{formState.message.user}</p>
                    </div>
                ) : null
            }

            {
                formState.error ? (
                    <p className="text-red-500">{formState.error}</p>
                ) : null
            }
        </div>
        </div>
    );

}
