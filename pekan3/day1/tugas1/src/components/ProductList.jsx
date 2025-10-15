import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 200 },
];

export default function ProductList() {
  const { addItem } = useContext(CartContext);
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <p>{p.name} - ${p.price}</p>
          <button onClick={() => addItem(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
