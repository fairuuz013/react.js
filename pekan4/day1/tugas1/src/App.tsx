import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // ambil theme dari localStorage kalau ada
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav className="flex justify-between items-center p-4 border-b border-border">
        <div className="flex gap-4">
          <Link to="/" className="hover:text-primary font-semibold">
            Home
          </Link>
          <Link to="/profile" className="hover:text-primary font-semibold">
            Profile
          </Link>
        </div>

        {/* tombol dark/light switcher */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-accent transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>

      <div className="p-8">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold">Welcome Home 🏠</h1>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
