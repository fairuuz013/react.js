import { useState, useEffect } from "react";

function RenderLogger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Komponen di-render atau di-update");
  });

  return (
    <div>
      <h2>Render Logger</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default RenderLogger;

 