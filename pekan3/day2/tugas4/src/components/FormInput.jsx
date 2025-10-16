import useForm from "../hooks/useForm";

export default function FormInput() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
  });
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>📝 Form Input</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Masukkan nama..."
          value={values.name}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Masukkan email..."
          value={values.email}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />

        <button
          type="button"
          onClick={resetForm}
          style={{
            marginTop: "10px",
            backgroundColor: "#333",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reset Form
        </button>
      </form>

      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <h3>📊 Data Real-Time:</h3>
        <p>
          <strong>Nama:</strong> {values.name}
        </p>
        <p>
          <strong>Email:</strong> {values.email}
        </p>
      </div>
    </div>
  );
}
