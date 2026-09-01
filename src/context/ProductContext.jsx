import { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  function getProducts() {
    return products;
  }

  function getProductById(id) {
    return products.find((product) => product.id === Number(id));
  }

  return (
    <ProductContext.Provider value={{ getProducts, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  return context;
}
