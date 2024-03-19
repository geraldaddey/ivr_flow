import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Flow from "./components/Flow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Flow />
    </div>
  );
}

export default App;
