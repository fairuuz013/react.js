// src/pages/Contact.jsx
export default function Contact() {
  // Style untuk container halaman
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#fff",
  };

  // Style untuk judul utama
  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "30px",
  };

  // Style untuk form
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  // Style untuk grup form (label + input)
  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
  };

  // Style untuk label
  const labelStyle = {
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#34495e",
  };

  // Style untuk input dan textarea
  const inputStyle = {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
  };

  // Style khusus untuk textarea
  const textareaStyle = {
    ...inputStyle, // Mewarisi style dari input
    height: "150px",
    resize: "vertical",
  };

  // Style untuk tombol submit
  const buttonStyle = {
    padding: "15px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Hubungi Kami</h1>
      <form style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Nama Lengkap</label>
          <input type="text" id="name" style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Alamat Email</label>
          <input type="email" id="email" style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Pesan</label>
          <textarea id="message" style={textareaStyle} required></textarea>
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2980b9")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3498db")}
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}
