import React from "react";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        background: darkMode ? "#facc15" : "#3b82f6",
        color: darkMode ? "#000" : "#fff"
      }}
    >
      {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
}

export default ThemeToggle;