import { useState } from "react";
import HeavyComponent from "./components/HeavyComponent";
import ModerateComponent from "./components/ModerateComponent";
import LightComponent from "./components/LightComponent";
import "./App.css";

export default function App() {
  const [showHeavy, setShowHeavy] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <h2>Performance Profiling</h2>
      <button onClick={() => setShowHeavy(!showHeavy)}>
        {showHeavy ? "Sembunyikan" : "Tampilkan"} Heavy Components
      </button>
      {showHeavy && <HeavyComponent />}
      <ModerateComponent />
      <LightComponent />
    </div>
  );
}
