// src/components/ThemeCard.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeCard({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
        backgroundColor: theme === "light" ? "#f2f2f2" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}
