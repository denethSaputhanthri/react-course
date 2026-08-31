import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          navigate("/");
          return;
        }
        console.log(data);
        setProduct(data);
      });
  }, [id]);

   if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
        
            <div className="page">
              <div className="container">
                <div className="product-detail">
                  <div className="product-detail-image">
                    <img src={product.image} />
                  </div>
                  <div className="product-detail-content">
                    <h2 className="product-detail-title">{product.title}</h2>
                    <p className="product-detail-price">${product.price}</p>
                    <p className="product-detail-description">
                      {product?.description}
                    </p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
        
    </>
  );
}
