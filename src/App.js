import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  const [catchValueInput, setCatchValueInput] = useState("");
  const handleCatchValueInput = (value) => {
    setCatchValueInput(value);
  };
  return (
    <div className="App space-y-0 bg-gray-900">
      <div>
        <Header
          catchValueInput={catchValueInput}
          handleCatchValueInput={handleCatchValueInput}
        />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
