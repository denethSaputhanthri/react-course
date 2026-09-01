import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQtyLabel = productInCart ? `(${productInCart.quantity })` : "";

  return (
    <>
      <div key={product.id} className="product-card">
        <img src={product.image} className="product-card-image" />
        <div className="product-card-content">
          <h3 className="product-card-name">{product.title}</h3>
          <p className="product-card-price">${product.price}</p>
          <div className="product-card-actions">
            <Link className="btn btn-secondary" to={`/products/${product.id}`}>
              View Details
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart {productQtyLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
