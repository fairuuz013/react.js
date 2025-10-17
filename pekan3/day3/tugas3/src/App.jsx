import { useState, useCallback } from "react";
import ChildWithButton from "./components/ChildWithButton";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleAction = useCallback(() => {
    alert("Callback jalan bang");
  }, []);

  console.log("Rander ParentWithCallback");

  return (
    <div style={{ padding: 20 }}>
      <h2>useCallback</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Tambah count</button>
      <ChildWithButton onAction={handleAction} />
    </div>
  );
}
