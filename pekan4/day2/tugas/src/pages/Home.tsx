// GANTI FILE INI DENGAN:
import UserCard from "../components/UserCard";
import ProductList from "../components/ProductList";
import Form from "../components/Form";

export default function Home() {
    const products = [
        { id: 1, name: "Laptop Gaming", price: 1999 },
        { id: 2, name: "Wireless Mouse", price: 50 },
        { id: 3, name: "Mechanical Keyboard", price: 120 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Welcome to Our Store
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover amazing products with the best quality and service
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <UserCard name="Ruz" age={19} isActive={true} />

                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Featured Products</h3>
                            <ProductList
                                products={products}
                                onSelect={(id) => alert(`Produk ${id} dipilih`)}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}