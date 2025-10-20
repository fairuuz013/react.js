// src/pages/dashboard/Dashboard.jsx
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    nav("/login");
  };

  return (
    <div className={`dashboard-page ${collapsed ? "sidebar-collapsed" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-top">
          <h3 className="sidebar-logo">Dash</h3>
          <button className="collapse-btn" onClick={() => setCollapsed(s => !s)}>
            {collapsed ? "→" : "←"}
          </button>
        </div>

        <nav className="sidebar-nav">
          <button onClick={() => nav("/dashboard")}>Overview</button>
          <button onClick={() => nav("/dashboard/profile")}>Profile</button>
          <button onClick={() => nav("/dashboard/settings")}>Settings</button>
        </nav>

        <div className="sidebar-bottom">
          <button className="danger" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <h2>Welcome to Dashboard</h2>
        <p>Ini area konten. Outlet akan render child routes di sini.</p>
        {/* jika ada nested routes, pakai <Outlet /> */}
        <Outlet />
      </main>
    </div>
  );
}
