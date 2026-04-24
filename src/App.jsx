import { useState, useEffect } from "react";
import CounterControls from "./components/CounterControls";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [limitMessage, setLimitMessage] = useState("");
  const [stepSize, setStepSize] = useState(1);

  const increase = () => {
    if (count + stepSize <= 10) {
      setCount(count + stepSize);
      setLimitMessage("");
    } else {
      setLimitMessage("Max reached!");
    }
  };

  const decrease = () => {
    if (count - stepSize >= 0) {
      setCount(count - stepSize);
      setLimitMessage("");
    } else {
      setLimitMessage("Min reached!");
    }
  };

  const reset = () => {
    setCount(0);
    setLimitMessage("");
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // optional persistence
  useEffect(() => {
    const saved = localStorage.getItem("count");
    if (saved) setCount(Number(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div style={{
      background: darkMode ? "#0f172a" : "#f1f5f9",
      color: darkMode ? "#e2e8f0" : "#0f172a",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        background: darkMode ? "#1e293b" : "#fff",
        padding: "30px",
        borderRadius: "16px",
        width: "320px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Smart Counter 
        </h2>

        <CounterControls
          count={count}
          increase={increase}
          decrease={decrease}
          reset={reset}
          stepSize={stepSize}
          setStepSize={setStepSize}
          limitMessage={limitMessage}
        />

        <ThemeToggle
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default App;