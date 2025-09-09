import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    if (count === 0) return;
    setCount((count) => count - 1);
  }

  return (
    <>
      <header>
        <h1>Assignment-2 Counter Application</h1>
      </header>
      <div className="ROW">
        <FunctionComponent
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <ClassComponent
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
    </>
  );
}

export default App;
