import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductList = ({ items }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const prods = items[category];
    if (prods) {
      setProducts(prods);
    }
  });
  return (
    <div style={{ display: "flex" }}>
      {Array.isArray(products) &&
        products.map((prod) => (
          //   <h1 key={prod.id}>{prod.name}</h1>
          <Product item={prod} category={category} />
        ))}
    </div>
  );
};

export default ProductList;
