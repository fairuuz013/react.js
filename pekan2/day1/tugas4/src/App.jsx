import React, { useRef } from "react";

export default function UncontrolledForm() {
  //BUat ref setiap input
  const namaRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // mencegah reload halaman

    // ambil nilai langsung dari elemen input

    const name = namaRef.current.value;
    const email = emailRef.current.value;

    // tampilkan hasil di console
    console.log("Nama", name);
    console.log("email", email);

    // untuk menampilkan menggunakan alert
    alert(`Nama: ${name}\nEmail: ${email}`);
  };

  return (
    <div>
      <h2>Formulir Uncontrolled Components</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Nama</label>
          <br />

          <input type="text" ref={namaRef} placeholder="Masukan nama" />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <br />

          <input type="text" ref={emailRef} placeholder="Masukan email" />
        </div>

        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}
