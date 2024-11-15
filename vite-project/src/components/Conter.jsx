import React, { useState } from "react";

const Conter = () => {
  const [Conter, setCont] = useState(-1);
  const lista = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* <button ></button> */}
      <ul>
        {lista.map((x, index) => (
          <li
            key={index}
            className={`w-[100PX] text-center text-[2rem] border-black border-[2px]
                m-[0.5rem]
                    ${
                      index == conter
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
            onClick={() => setCont(index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Conter;
