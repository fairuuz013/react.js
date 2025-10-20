// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    // contoh valid sederhana
    if (username === "user" && password === "pass") {
      const token = Math.random().toString(36).slice(2);
      localStorage.setItem("authToken", token);
      navigate(from, { replace: true });
    } else {
      alert("Username / password salah. Coba: user / pass");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Masuk ke Akun</h2>
        <label>
          Username
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="primary" type="submit">Login</button>
        <p className="muted">Coba username: <b>user</b> / password: <b>pass</b></p>
      </form>
    </div>
  );
}
