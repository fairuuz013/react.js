import React, { useState } from "react";

function LinkPreventer() {
  const [name, setName] = useState(""); // buat nyimpen teks dari input

  const handleClick = (event) => {
    event.preventDefault();
    console.log("Link diklik tapi navigasi dicegah coy");
    alert("WOttt mau kenapa lu coy");
  };

  const handleInputChange = (event) => {
    console.log("Nilai input:", event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>SyntheticEvent Object 😎</h2>

      {/* Input yang pakai state */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukin nama lu coy"
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <p>Nama lu sekarang: {name || "(belum diisi)"}</p>

      <a
        href="https://www.youtube.com/"
        onClick={handleClick}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#ff5252",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Klik me bruhhh (Navigasi dijegah)
      </a>

      <br />
      <br />

      {/* Input biasa */}
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Bebasssss coy mau ketik apa"
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default LinkPreventer;
