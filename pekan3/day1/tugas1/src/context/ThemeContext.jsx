// src/context/ThemeContext.jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // default theme sebaiknya ada, misal 'light'
  const [theme, setTheme] = useState("light");

  // ini tadi namanya salah, harusnya toggleTheme (bukan toggleProvider)
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
