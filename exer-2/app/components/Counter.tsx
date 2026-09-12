"use client";
import React, {useState, useEffect} from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem("count");
        if (storedCount) {
            setCount(parseInt(storedCount));
        }
    }, []);

return (    
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => {
            setCount(count + 1);
        }} className="bg-amber-700 text-white p-2 rounded-b-md">Increment</button>

    </div>
)

}