export default function About() {
  // Style untuk container halaman
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  // Style untuk judul utama
  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "40px",
    borderBottom: "2px solid #3498db",
    paddingBottom: "10px",
  };

  // Style untuk setiap bagian (Misi, Visi, dll.)
  const sectionStyle = {
    marginBottom: "30px",
  };

  // Style untuk judul bagian
  const sectionTitleStyle = {
    fontSize: "1.8rem",
    color: "#34495e",
    marginBottom: "10px",
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Tentang Kami</h1>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Misi Kami</h2>
        <p>
          Menyediakan produk-produk inovatif dan berkualitas tinggi yang memenuhi
          dan melampaui harapan pelanggan. Kami berkomitmen untuk memberikan
          pengalaman berbelanja yang luar biasa dengan integritas dan layanan
          terbaik.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Visi Kami</h2>
        <p>
          Menjadi pemimpin pasar dalam industri e-commerce dengan terus
          berinovasi, membangun hubungan jangka panjang dengan pelanggan, dan
          menciptakan dampak positif bagi komunitas.
        </p>
      </div>
    </div>
  );
}
