export default function FunctionComponent({
  handleIncrement,
  handleDecrement,
  count,
}) {
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
