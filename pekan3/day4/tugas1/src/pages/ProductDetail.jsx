import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img
        src={product.images && product.images[0]}
        alt={product.title}
        width="200"
        style={{ borderRadius: "10px", marginBottom: "10px" }}
      />
      <p>{product.description}</p>
      <p>
        <b>Price:</b> ${product.price}
      </p>
      <p>
        <b>Category:</b> {product.category?.name}
      </p>
    </div>
  );
}
