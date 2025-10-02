import React from "react";

function LoginStatus({ isLoggedIn, messages }) {
  return (
    <div style={{ margin: "16px", padding: "12px", border: "1px solid #ddd" }}>
      {isLoggedIn ? (
        <h2>Selamat datang kembali, User!</h2>
      ) : (
        <h2>Silakan login dulu.</h2>
      )}

      {isLoggedIn && (
        <p>
          Kamu punya <strong>{messages.length}</strong> pesan baru 📩
        </p>
      )}
    </div>
  );
}

export default LoginStatus;
