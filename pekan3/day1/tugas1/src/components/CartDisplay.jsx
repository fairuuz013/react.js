import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartDisplay() {
  const { cart, removeItem, clearCart, total } = useContext(CartContext);

  return (
    <div>
      <h3>Keranjang Belanja</h3>
      {cart.length === 0 ? (
        <p>Kosong nih!</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeItem(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <button onClick={clearCart}>Hapus Semua</button>
        </>
      )}
    </div>
  );
}
