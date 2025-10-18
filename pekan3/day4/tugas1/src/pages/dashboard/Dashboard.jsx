import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  // Style untuk container utama dashboard
  const dashboardContainerStyle = {
    display: "flex",
    fontFamily: "Arial, sans-serif",
    minHeight: "calc(100vh - 100px)", // Mengisi sisa tinggi layar
  };

  // Style untuk sidebar navigasi
  const sidebarStyle = {
    width: "240px",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRight: "1px solid #dee2e6",
  };

  // Style untuk daftar link di sidebar
  const navListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  // Style untuk link navigasi
  const linkStyle = {
    textDecoration: "none",
    color: "#495057",
    display: "block",
    padding: "12px 15px",
    borderRadius: "6px",
    marginBottom: "5px",
    transition: "background-color 0.3s",
  };

  // Style tambahan untuk link yang sedang aktif
  const activeLinkStyle = {
    backgroundColor: "#3498db",
    color: "white",
  };

  // Style untuk area konten utama
  const contentStyle = {
    flex: 1,
    padding: "20px",
  };

  return (
    <div style={dashboardContainerStyle}>
      <nav style={sidebarStyle}>
        <ul style={navListStyle}>
          <li><NavLink to="profile" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Profile</NavLink></li>
          <li><NavLink to="settings" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Settings</NavLink></li>
        </ul>
      </nav>
      <main style={contentStyle}>
        <Outlet />
      </main>
    </div>
  );
}
