import React from "react";

function FruitList({ fruits }) {
  return (
    <div style={{ margin: "16px", padding: "12px", border: "1px solid #ddd" }}>
      <h3>Daftar Buah</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>🍎 {fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
