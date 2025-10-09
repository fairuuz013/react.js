import React from "react";

function App() {
  const isLoggedIn = true;
  const massages = ["Hal0!", "kamu punya tugas baru"];

  return (
    <div>
      <h2>Conditional Rendering dengan Ternary dan && Operator</h2>

      {isLoggedIn ? (
        <h3>Selamat datang kembali tuan fairuuz</h3>
      ) : (
        <h3>Silakan login dulu tuan muda fairuuz</h3>
      )}

      {massages.length > 0 && (
        <p>Tuan anda mempunyai {massages.length} pesan baru</p>
      )}

      {isLoggedIn && massages.length === 0 && (
        <p>Maaf tuan tidak ada pesan baru untuk hari ini</p>
      )}
    </div>
  );
}


export default App