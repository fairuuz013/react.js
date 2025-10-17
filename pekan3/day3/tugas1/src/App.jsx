import { useState } from "react";
import Child from "./components/Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Ohayo Minna");

  console.log("Render Parent");

  return (
    <div style={{ padding: 20 }}>
      <h2>React.memo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Tambah Count</button>
      <button
        onClick={() =>
          setMsg(m => (m === "Halo World!" ? "Yo Mina" : "Halo World!"))
        }
      >
        Ganti pesan
      </button>

      <Child label={msg} onClick ={() => alert("Nani nani nani")}/>
    </div>
  );
}
