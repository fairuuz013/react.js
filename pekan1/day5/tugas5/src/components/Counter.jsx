import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // tombol tambah 3x sekaligus

  const tambahTiga = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decreament = () => {
    if ((count == 0)) return;
    setCount((prevCount) => prevCount - 1);
  };

  const perkalian = () => {
    setCount((prevCount) => prevCount * 2);
  };

  const pembagian = () => {
    setCount((prevCount) => prevCount / 2);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter fungsional update </h1>
      <p>Count: {count}</p>

      <button onClick={increament}>Tambah</button>
      <button onClick={decreament}>kurang</button>
      <button onClick={perkalian}>Perkali</button>
      <button onClick={tambahTiga}>Tambah Tiga</button>
      <button onClick={pembagian}>bagi</button>
    </div>
  );
}
