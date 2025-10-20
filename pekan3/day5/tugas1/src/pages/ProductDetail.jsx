import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching detail:", err));
  }, [id]);

  if (!product) return <p style={{ textAlign: "center", marginTop: 40 }}>Loading...</p>;

  return (
    <div className="main-content">
      <button onClick={() => navigate(-1)} className="detail-btn" style={{ marginBottom: "16px" }}>
        ← Kembali
      </button>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <img
          src={product.images?.[0]}
          alt={product.title}
          style={{
            width: "300px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
          }}
        />
        <div style={{ maxWidth: "400px" }}>
          <h2 style={{ marginBottom: "8px" }}>{product.title}</h2>
          <p style={{ color: "var(--muted)", marginBottom: "10px" }}>
            {product.category?.name}
          </p>
          <h3 style={{ color: "#ff6600" }}>Rp {product.price?.toLocaleString()}</h3>
          <p style={{ marginTop: "12px" }}>{product.description}</p>
          <button
            className="primary"
            style={{ marginTop: "16px", width: "100%" }}
            onClick={() => alert("Fitur tambah ke keranjang belum dibuat 😄")}
          >
            🛒 Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
