import useCounterWithToggle from "../hooks/useCounterWithToggle";

export default function CounterWithToggle() {
  const { count, increment, decrement, reset, isVisible, toggleVisible } =
    useCounterWithToggle();

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2> useCounterWithToggle()</h2>
      <button
        onClick={toggleVisible}
        style={{
          marginBottom: "15px",
          padding: "8px 15px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#333",
          color: "white",
          cursor: "pointer",
        }}
      >
        {isVisible ? "Hide Counter" : "Show Counter"}
      </button>

      {isVisible && (
        <div style={{ marginTop: "10px" }}>
          <h3>Count: {count}</h3>
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}
