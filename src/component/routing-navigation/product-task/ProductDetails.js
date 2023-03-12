import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

const ProductDetails = () => {
  const { id, category } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    const arr = data[category];

    const prod = arr && arr.filter((prod) => prod.id == id)[0];
    if (prod) {
      setProducts(prod);
      //   console.log(product);
    }
  });

  return (
    <>
      <img
        src={`/assets/${product.pimg}`}
        style={{ width: "150px", height: "150px" }}
      />
      <h4>{product.name}</h4>
      <p>Price :{product.price}</p>
      <p>{product.desc}</p>
    </>
  );
};

export default ProductDetails;
