import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div className="page">
        <div className="home-hero">
          <h2 className="home-title">Welcome to ShopHub</h2>
          <p className="home-subtitle">
            Discover the best products at unbeatable prices.
          </p>
        </div>
        <div className="container">
          <h2 className="page-title">Our Products</h2>
          <div className="product-grid">
            {products.map((product) => (
             <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
