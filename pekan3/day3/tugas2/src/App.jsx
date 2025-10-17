import { useState, useMemo } from "react";
import './App.css'

function heavyComputation(num) {
  console.log("Perhitungan berat dimulai...");
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) total += Math.sqrt(num + i);
  return total;
}

export default function App() {
  const [num, setNum] = useState(1);
  const [refresh, setRefresh] = useState(0)

  const memoResult = useMemo(() => heavyComputation(num), [num])

  return (
    <div style={{padding: 20 }}>
      <h2>useMemo</h2>
      <input type="number"
      value={num}
      onChange={(e) => setNum(Number(e.target.value))} 
     />
     <button onClick={() => setRefresh(r => r +1)}>Re-render ({refresh})</button>
   <p>Hasil: {memoResult.toFixed(2)}</p>
    </div>
  )

}