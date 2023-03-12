import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AlbumMenu = () => {
  const [albumMenu, setAlbumMenu] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        // console.log(response.data);
        setAlbumMenu(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      {Array.isArray(albumMenu) &&
        albumMenu.map((albumsItems, i) => (
          <p key={albumsItems.id}>
            <Link
              to={`/${albumsItems.id}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              {albumsItems.title}
              <hr />
            </Link>
          </p>
        ))}
    </>
  );
};

export default AlbumMenu;
