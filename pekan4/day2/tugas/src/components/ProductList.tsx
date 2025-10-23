interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductListProps {
    products: Product[];
    onSelect: (id: number) => void;
}

export default function ProductList({ products, onSelect }: ProductListProps) {
    return (
        <ul>
            {products.map((item) => (
                <li key={item.id} onClick={() => onSelect(item.id)}>
                    {item.name} - ${item.price}
                </li>
            ))}
        </ul>
    );
}

