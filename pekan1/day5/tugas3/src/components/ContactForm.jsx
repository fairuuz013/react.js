import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handlChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang akan di submit", formData);
    alert(`Terima kasih, ${formData.firstName}! Data anda telah di submit `);
  };
  return (

    // ini nama depan 
    <form onSubmit={handleSubmit}>
      <h2>Formulir kontak</h2>
      <div>
        <label>Nama depan</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handlChange}
        />
      </div>

      {/* ini nama belakang */}
      <div>
        <label>Nama belakang</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handlChange}
        />
      </div>

      {/* ini email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handlChange}
        />
      </div>

      <div>
        <button type="submit">submit</button>
        <p>Nama depan: {formData.firstName}</p>
        <p>Nama belakang: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
      </div>
    </form>
  );
}
