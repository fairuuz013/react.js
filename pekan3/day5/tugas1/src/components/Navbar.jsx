// src/components/Navbar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-inner">
        {/* Logo kiri */}
        <div className="nav-left">
          <NavLink to="/" className="nav-logo">
            YourLogo
          </NavLink>
        </div>

        {/* Tombol hamburger mobile */}
        <button className={`hamburger ${menuOpen ? "is-open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Link navigasi */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-btn">Home</NavLink>
          <NavLink to="/about" className="nav-btn">About</NavLink>
          <NavLink to="/contact" className="nav-btn">Contact</NavLink>
          <NavLink to="/products" className="nav-btn">Products</NavLink>
          <NavLink to="/dashboard" className="nav-btn">Dashboard</NavLink>
        </div>

        {/* Kanan: toggle + auth */}
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light-theme" ? "🌙" : "☀️"}
          </button>
          {localStorage.getItem("isLoggedIn") ? (
            <button className="auth-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="auth-btn">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
