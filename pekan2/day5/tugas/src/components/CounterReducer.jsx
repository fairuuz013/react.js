import React, { useReducer } from "react";

// Reducer function: ngatur semua aksi ke state
function counterReducer(state, action) {
  switch (action.type) {
    case "tambah":
      return { count: state.count + 1 };
    case "kurang":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function CounterReducer() {
  // Inisialisasi useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Counter (useReducer Example)</h2>
      <p>Nilai saat ini: {state.count}</p>
      <button onClick={() => dispatch({ type: "tambah" })}>Tambah</button>
      <button onClick={() => dispatch({ type: "kurang" })}>Kurang</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
