import React from "react";

const ClickEvent = () => {
    const handelClick=(name)=>{
     console.log('hello '+name);
    }
  return (
    <>
      <button 
      onClick={()=> handelClick("bakr")}
      className="bg-blue-500 p-2 m-3  rounded-2xl border-blue-300 border-[2px]">
        click me
      </button>
      
    </>
  );
};

export default ClickEvent;
