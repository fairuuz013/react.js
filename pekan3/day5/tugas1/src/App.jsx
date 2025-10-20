// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import DashboardLayout from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

import "./App.css"; // styling utama

export default function App() {
  return (
    <>
      {/* Navbar global */}
      <Navbar />

      {/* Semua konten halaman */}
      <main className="main-content">
        <Routes>
          {/* 🌍 Halaman publik */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />

          {/* 🔒 Halaman yang butuh login */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>

          {/* ⚠️ Fallback untuk halaman yang gak ada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
