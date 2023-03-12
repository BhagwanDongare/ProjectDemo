import React from "react";
import { Link } from "react-router-dom";

const Photo = ({ thumbnailUrl, title }) => {
  return (
    <div
      style={{
        width: "190px",
        border: "1px solid #333",
        padding: 10,
        margin: 2,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img src={thumbnailUrl} style={{ width: "150px", height: "150px" }} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Photo;
