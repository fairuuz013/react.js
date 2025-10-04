import "./components/Card.css";
function App() {
  return (
    <div className="card">
      <h2 className="title">Belajar React itu seru bjir sumpah</h2>
      <p className="subtitle">Otw jadi fullstack terbaik ini bang</p>

      <p className="muted">I`cant do it brooooo</p>

      <button className="btn-primary" onClick={()=> alert("i'cant do it is easy bro i belive the proses")}>click me brooroo</button>
      <button className="btn-secondary" onClick={()=> alert("i trust my self period")}>This secondary opsion</button>
    </div>
  );
}

export default App;
