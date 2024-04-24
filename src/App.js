import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  const [catchValueInput, setCatchValueInput] = useState("");
  const handleCatchValueInput = (value) => {
    setCatchValueInput(value);
  };
  const [trueFalse,setTrueFalse] = useState(false)
  setTimeout(()=>{setTrueFalse(true);},3000)
  return (
    <div className="App relative space-y-0 bg-gray-900 ">
      <div>
        {trueFalse ? (
          ""
        ) : (
          <div className=" h-screen flex justify-center items-center bg-white">
            <div className="loader rounded"></div>
          </div>
        )}
        {trueFalse ? (
          <div className=" ">
            <Header
              catchValueInput={catchValueInput}
              handleCatchValueInput={handleCatchValueInput}
            />
          </div>
        ) : (
          <div className=" w-0 h-0 overflow-hidden">
            <Header
              catchValueInput={catchValueInput}
              handleCatchValueInput={handleCatchValueInput}
            />
          </div>
        )}
      </div>
      <div>{trueFalse ? <Outlet /> : ""}</div>
    </div>
  );
}

export default App;
