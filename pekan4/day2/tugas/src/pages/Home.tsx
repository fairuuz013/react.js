import UserCard from "../components/UserCard";
import ProductList from "../components/ProductList";
import Form from "../components/Form"

export default function home() {
    const products = [
        { id: 1, name: "laptop", price: 1999 },
        { id: 2, name: "Mouse", price: 50 },
    ]


    return (
        <div>
            <h1>Home Page</h1>
            <UserCard name="Ruz" age={19} isActive={true} />
            <ProductList
                products={products}
                onSelect={(id) => alert(`Produk ${id} dipilih`)}
            />
            <Form />
        </div>
    );
}