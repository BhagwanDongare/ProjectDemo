import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo";

const AlbumPhotos = () => {
  const { id } = useParams();

  const [photosList, setPhotosList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // console.log(response.data);
        const photos = response.data.filter((obj) => obj.albumId == id);
        setPhotosList(photos);
        //console.log(photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <h3 style={{ color: "", fontStyle: "italic", textAlign: "center" }}>
        Album List
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photosList.map((item, i) => (
          <Photo thumbnailUrl={item.thumbnailUrl} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default AlbumPhotos;
