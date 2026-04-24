import React from "react";

function CounterControls({
  count,
  increase,
  decrease,
  reset,
  stepSize,
  setStepSize,
  limitMessage
}) {
  const buttonStyle = {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    color: "white"
  };

  const styles = {
    increment: { ...buttonStyle, background: "#22c55e" },
    decrement: { ...buttonStyle, background: "#ef4444" },
    reset: { ...buttonStyle, background: "#64748b" }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      <p>Step Size</p>
      <input
        type="number"
        value={stepSize}
        onChange={(e) => setStepSize(Number(e.target.value))}
        style={{
          padding: "8px",
          borderRadius: "8px",
          marginBottom: "20px",
          width: "100%"
        }}
      />

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button onClick={increase} style={styles.increment}>
          +
        </button>
        <button onClick={decrease} style={styles.decrement}>
          -
        </button>
        <button onClick={reset} style={styles.reset}>
          Reset
        </button>
      </div>

      <p style={{ color: "red", minHeight: "20px" }}>
        {limitMessage}
      </p>
    </div>
  );
}

export default CounterControls;