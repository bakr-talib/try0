import React from 'react'
import { useState } from 'react';

export const Color = () => {
    const colors = [
        { text: "clear", bgcolor: "bg-black" },
        { text: "Red", bgcolor: "bg-red-500" },
        { text: "Green", bgcolor: "bg-green-500" },
        { text: "Blue", bgcolor: "bg-blue-500" },
      ];
    
      const [boxColor, setBoxColor] = useState(""); 
    
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
     
          <ul className="flex space-x-4 mb-8">
            {colors.map((color, index) => (
              <li
                key={index}
                className={`cursor-pointer text-white px-4 py-2 rounded ${color.bgcolor}`}
                onClick={() => setBoxColor(color.bgcolor)}
              >
                {color.text}
              </li>
            ))}
          </ul>
          <div
            className={`w-64 m-5 h-64 rounded-3xl border-[5px] border-[#ccc] ${boxColor}`}
          ></div>
        </div>
      )
}
