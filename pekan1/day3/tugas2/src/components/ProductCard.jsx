function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "8px",
        width: "200px",
        margin: "10px",
      }}
    >
      <h1>{productName}</h1>
      <p>Harga: Rp{price}</p>
      <p>Stock barang: {stock}</p>
      <p>Ketersidiaan barang {isAvailable ? "Tersedia ✅" : "Kosong ❌"}</p>
    </div>
  );

  ProductCard.defaultProps = {
    stock:0 ,
    isAvailable: false,
  }
}

export default ProductCard
