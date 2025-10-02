import React from "react";

function DiscountPrice({ price, discount }) {
  const finalPrice = price - price * (discount / 100);
  const greeting = (name) => `Halo, ${name}! Selamat berbelanja`;

  return (
    <div style={{ margin: "16px", padding: "12px", border: "1px solid #ddd" }}>
      <h2>{greeting("Fairuuz")}</h2>
      <p>Harga awal: Rp {price}</p>
      <p>Diskon: {discount}%</p>
      <p>
        Harga setelah diskon:{" "}
        <strong style={{ color: "green" }}>Rp {finalPrice}</strong>
      </p>
    </div>
  );
}

export default DiscountPrice;
