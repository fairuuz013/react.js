import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeParagraph() {
  const { theme } = useContext(ThemeContext);

  const paragraphStyle = {
    color: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#fff" : "#000",
    padding: "10px",
    borderRadius: "5px",
  };
  return <p style={paragraphStyle}>ini adalah return paragraf dengan tema {theme}</p>;
}
