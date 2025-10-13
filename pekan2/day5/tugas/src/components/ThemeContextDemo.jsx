
import React from "react";
import ThemedBox from "./ThemedBox";
import ThemeButton from "./ThemeButton";

export default function ThemeContextDemo() {
  return (
    <div>
      <h2>Context API: Tema (Light/Dark)</h2>
      <ThemeButton />
      <ThemedBox />
      <ThemedBox />
    </div>
  );
}
