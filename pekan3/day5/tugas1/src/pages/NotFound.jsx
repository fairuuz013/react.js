// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <div className="center-page">
      <h1>404</h1>
      <h3>Waduh, halaman nggak ketemu 😅</h3>
      <p>Yuk balik ke beranda biar aman.</p>
      <div style={{ marginTop: 16 }}>
        <button className="primary" onClick={() => nav("/")}>Balik ke Home</button>
      </div>
    </div>
  );
}
