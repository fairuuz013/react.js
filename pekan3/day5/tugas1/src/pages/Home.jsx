
import { NavLink } from "react-router-dom";

export default function Home() {
  // Style untuk container utama
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 120px)", // Mengisi sisa tinggi layar
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  // Style untuk judul utama
  const titleStyle = {
    fontSize: "3rem",
    color: "#2c3e50",
    marginBottom: "20px",
  };

  // Style untuk subjudul
  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    maxWidth: "600px",
    marginBottom: "40px",
  };

  // Style untuk tombol Call-to-Action (CTA)
  const ctaButtonStyle = {
    padding: "15px 30px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#3498db",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Selamat Datang di Toko Kami</h1>
      <p style={subtitleStyle}>
        Temukan produk-produk terbaik dengan harga yang tak terkalahkan. Semua
        kebutuhan Anda ada di sini!
      </p>
      <NavLink
        to="/products"
        style={ctaButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2980b9")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3498db")}
      >
        Lihat Produk
      </NavLink>
    </div>
  );
}
