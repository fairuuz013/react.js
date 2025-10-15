// src/components/ThemedText.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemedText({ text }) {
  const { theme } = useContext(ThemeContext);

  const color = theme === "light" ? "#000" : "#fff";

  return <p style={{ color }}>{text}</p>;
}
