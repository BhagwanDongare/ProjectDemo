import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const ProductSubCat = () => {
  const { cat } = useParams();

  const [productList, setProductList] = useState([]);
  //   console.log(cat);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${cat}`)
      .then((response) => {
        // console.log(response.data);
        setProductList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cat]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          border: "1px solid red",
          backgroundColor: "skyblue",
          padding: 5,
          marginTop: 5,
          textTransform: "uppercase",
          fontWeight: "1000",
        }}
      >
        {cat}
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* <h6>Product sub cat</h6> */}
        {Array.isArray(productList) &&
          productList.map((item, i) => (
            <Card
              style={{
                width: "18rem",
                margin: 5,
                marginTop: 5,
                alignItems: "center",
                padding: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: 150, height: 150 }}
              />
              <Card.Body>
                <Card.Subtitle>{item.title}</Card.Subtitle>
                <Card.Text
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxHeight: "3.6em",
                    lineHeight: "1.8em",
                  }}
                >
                  {item.description}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
};

export default ProductSubCat;
