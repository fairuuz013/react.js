import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <ProductCard
        productName="ASUS ROG STRIX G16 G614JU i7-13650HX, RTX 4050:"
        price={"23.499.000."}
        stock={13}
        isAvailable={true}
      />
      <ProductCard
        productName="Iphone"
        price={"22.000.000"}
        stock={50}
        isAvailable={true}
      />
    </div>
  );
}

export default App;
