import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <header className="bg-blue-500 flex justify-between p-4 text-white text-1 font-bold text-lg ">
      <h1 className="ml-7">
        logo
      </h1>
      <nav className="flex justify-between">
        <a className="ml-4" href="">aaaa</a>
        <a className="ml-4" href="">aaaa</a>
        <a className="ml-4" href="">aaaa</a>
        <a className="ml-4" href="">aaaa</a>
      </nav>
      <button className="mr-7 bg-slate-100 p-2 rounded-md text-blue-700">sing in</button>
    </header>
  );
}

export default App;
