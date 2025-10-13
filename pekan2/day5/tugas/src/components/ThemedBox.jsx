import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    padding: "20px",
    margin: "10px 0",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  return <div style={boxStyle}>Tema sekarang: {theme.toUpperCase()}</div>;
}
