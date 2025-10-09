import React from "react";

function StatusMessage({ status }) {
  let message;

  switch (status) {
    case "loading":
      message = <p>Sedang memuat data coy...</p>;
      break;
    case "success":
      message = <p>Data nya udh berasil di muat</p>;
      break;
    case "error":
      message = <p>Terjadi kesalahan coy ada yang salah</p>;
      break;
    default:
      message = <p>Status tidak dikenal nih</p>;
  }

  return (
    <div>
      <h2>Conditional Randering dengan Switch Statement </h2>
      {message}
    </div>
  );
}

function App() {
  return (
    <div>
      <StatusMessage status="loading" />
      <StatusMessage status="success" />
      <StatusMessage status="error" />
      <StatusMessage status="unknown" />
    </div>
  );
}

export default App