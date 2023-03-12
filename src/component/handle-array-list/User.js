import React from "react";

const User = (props) => {
  return (
    <>
      <span style={{ color: "cyan", padding: "10px" }}>{props.data.name}</span>
      <span style={{ color: "cyan", padding: "10px" }}>{props.data.email}</span>
      <span style={{ color: "cyan", padding: "10px" }}>
        {props.data.address}
      </span>
      <br />
    </>
  );
};

export default User;
