// components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">YourLogo</NavLink>
        <ul className="nav-menu">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
          <li><NavLink to="/dashboard" className="nav-link">Dashboard</NavLink></li>
          <button className="theme-toggle" onClick={toggleTheme}>🌙</button>
        </ul>
      </div>
    </nav>
  );
}