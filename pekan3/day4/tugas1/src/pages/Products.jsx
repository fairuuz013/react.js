import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>Our Products</h1>
        <p style={{ color: "#555" }}>
          Discover our amazing collection of products
        </p>
      </div>

      {/* Loading */}
      {products.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              border: "6px solid #ccc",
              borderTopColor: "#333",
              borderRadius: "50%",
              margin: "0 auto 10px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <p>Loading products...</p>
        </div>
      ) : (
        // Produk Grid
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((item) => (
            <NavLink
              key={item.id}
              to={`/products/${item.id}`}
              style={{
                display: "block",
                padding: "15px",
                textDecoration: "none",
                color: "#222",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 2px 5px rgba(0,0,0,0.1)")
              }
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#007bff", fontWeight: "bold" }}>
                ${item.price}
              </p>
              <span style={{ color: "#666", fontSize: "14px" }}>
                View Details →
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
