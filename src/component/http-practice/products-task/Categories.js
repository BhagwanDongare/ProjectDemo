import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Categories = () => {
  //   const { url } = useParams();
  const url = "https://fakestoreapi.com/products/categories";
  const [categories, setCategories] = useState([]);

  const cate_array = [
    {
      name: "electronics",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg",
    },
    {
      name: "jewelery",
      img: "https://smhttp-ssl-84869.nexcesscdn.net/pub/media/catalog/category/finej1.jpg",
    },
    {
      name: "men's clothing",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2017%2F12%2F11%2Fgettyimages-539573922-2000.jpg&q=85",
    },
    {
      name: "women's clothing",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizD39qCLM-pBos4RnL-j5uvR6x3v5euiMRQ&usqp=CAU",
    },
  ];
  useEffect(() =>
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        // setCategories(response.data);
        setCategories(cate_array);
      })
      .catch((err) => {
        console.log(err);
      }, [])
  );

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {Array.isArray(categories) &&
        categories.map((cat, i) => (
          <Link to={cat.name} style={{ textDecoration: "none" }}>
            <Card
              style={{
                width: "14rem",
                alignItems: "center",
                marginLeft: 5,
                marginRight: 5,
                padding: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Card.Img
                variant="top"
                src={cat.img}
                style={{
                  borderRadius: 150,
                  width: 110,
                  height: 110,
                }}
              />
              <Card.Body>
                <Card.Title>{cat.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      {/* <h6>Categories</h6> */}
    </div>
  );
};

export default Categories;
