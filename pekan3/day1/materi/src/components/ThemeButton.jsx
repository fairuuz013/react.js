import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeButton() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#333" : "#eee",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <>
      <button style={buttonStyle} onClick={toggleTheme}>
        Ganti Tema Bang ({theme})
      </button>
    </>
  );
}
