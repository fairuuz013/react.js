// GANTI FILE INI DENGAN:
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
        <div className="space-y-3">
            {products.map((item) => (
                <div
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className="group cursor-pointer bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-200 transform hover:scale-[1.02]"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">High quality product</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">${item.price}</p>
                            <button className="text-xs text-blue-500 hover:text-blue-700 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Select →
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}