import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Dropdown from "./component/Dropdown";
import CurrencyCon from "./component/CurrencyCon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="border flex-col border-black flex items-center h-screen">
      <Navbar />
      <div className="mt-10">
        <CurrencyCon />
      </div>
    </div>
  );
}

export default App;
