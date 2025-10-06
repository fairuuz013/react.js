import  { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const perkalian = () => {
    setCount((prevCount) => prevCount * 2);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
      <button onClick={perkalian}>Kali</button>
    </div>
  );
}
