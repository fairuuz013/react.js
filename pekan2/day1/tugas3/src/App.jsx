import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Formulir Kontak </h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label> Nama Depan:</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Masukan nama depan"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label> Nama Belakang:</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Masukan nama belakang"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label> Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukan email"
          />
        </div>
      </form>

      <h3>Data yang sedang diinput:</h3>
      <p>
        <strong>Nama Depan</strong> {formData.firstName}
      </p>
      <p>
        <strong>Nama Belakang</strong> {formData.lastName}
      </p>
      <p>
        <strong>Email</strong> {formData.email}
      </p>
    </div>
  );
}
