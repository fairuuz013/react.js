import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../App.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";

  useEffect(() => {
    // Fetch semua kategori
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    let url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=50";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let filtered = data;

        // Filter kategori
        if (category !== "all") {
          filtered = filtered.filter(
            (p) => p.category?.name?.toLowerCase() === category.toLowerCase()
          );
        }

        // Filter berdasarkan search
        if (search.trim()) {
          filtered = filtered.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        setProducts(filtered);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [category, search]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSearchParams({
      category: newCategory,
      search,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const keyword = form.get("search");
    setSearchParams({
      category,
      search: keyword,
    });
  };

  return (
    <div className="products-page">
      <h2 className="title"> Produk Terbaru</h2>

      {/* 🔍 Filter & Search Bar */}
      <div className="filter-bar">
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">Semua Kategori</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name.toLowerCase()}>
              {cat.name}
            </option>
          ))}
        </select>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Cari produk..."
            defaultValue={search}
          />
          <button type="submit">Cari</button>
        </form>
      </div>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="product-img"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">
                Rp {(product.price * 16000).toLocaleString()}
              </p>
              <Link to={`/products/${product.id}`} className="detail-btn">
                Lihat Detail
              </Link>
            </div>
          ))
        ) : (
          <p className="not-found">Produk tidak ditemukan 😔</p>
        )}
      </div>
    </div>
  );
}
