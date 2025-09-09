import { useState } from "react";
export default function FunctionComponent() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    if (count === 0) return;
    setCount((count) => count - 1);
  }
  return (
    <div className="container">
      <h2 style={{ color: "#18385c", margin: "2rem" }}>Functional Component</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={handleIncrement}>+</button>
        <h5>{count}</h5>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
