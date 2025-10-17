import { lazy, Suspense, useState } from "react";
import "./App.css";

const PageA = lazy(() => import("./page/PageA"));
const PageB = lazy(() => import("./page/PageB"));
const PageC = lazy(() => import("./page/PageC"));

export default function App() {
  const [page, setPage] = useState("A");

  return (
    <div style={{ padding: 20 }}>
      <h2>Lazy Loading</h2>
      <nav>
        <button onClick={() => setPage("A")}>Page A</button>
        <button onClick={() => setPage("B")}>Page B</button>
        <button onClick={() => setPage("C")}>Page C</button>
      </nav>

      <Suspense fallback={<p>Loading...</p>}>
        {page === "A" && <PageA />}
        {page === "B" && <PageB />}
        {page === "C" && <PageC />}
      </Suspense>
    </div>
  );
}
