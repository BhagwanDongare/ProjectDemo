import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item, category }) => {
  return (
    <div
      style={{
        maxWidth: "200px",
        border: "1px solid #333",
        padding: 10,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/${item.id}/${category}`}>
        <img
          src={`assets/${item.pimg}`}
          style={{ width: "150px", height: "150px" }}
        />
        <h4>{item.name}</h4>
        <p>Price :{item.price}</p>
        <p>{item.desc}</p>
      </Link>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
