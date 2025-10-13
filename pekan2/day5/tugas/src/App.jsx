import React from "react";
import Toolbar from "./components/Toolbar";
import Calculator from "./components/Calculator";
import SharedState from "./components/SharedState";
import CounterReducer from "./components/CounterReducer";
import ThemeContextDemo from "./components/ThemeContextDemo";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const user = {
    name: "Fairuuz",
    role: "Programmer Student",
    hobby: "Ngoding React And Game",
  };

  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Day 11: State Management Lanjutan</h1>

        <Calculator />
        <hr />

        <Toolbar user={user} />
        <hr />

        <SharedState />
        <hr />

        <CounterReducer />
        <hr />

        <ThemeContextDemo />
        <hr />
      </div>
    </ThemeProvider>
  );
}
