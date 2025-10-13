import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#333" : "#f5f5f5",
        color: theme === "light" ? "white" : "black",
      }}
    >
      Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
