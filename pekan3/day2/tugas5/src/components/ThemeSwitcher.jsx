import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const pageStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#111",
    color: theme === "light" ? "#111" : "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
  };

  return (
    <div style={pageStyle}>
      <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggleTheme}>
        Ganti ke {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
