import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ items }) => {
  return (
    <>
      {/* <h1>Menu</h1> */}

      {Array.isArray(items) &&
        items.map((cat, i) => (
          <p key={cat + i}>
            <Link to={`/${cat}`}>{cat}</Link>
          </p>
        ))}
    </>
  );
};

export default Categories;
