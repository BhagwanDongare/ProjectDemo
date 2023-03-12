import React from "react";
import Members from "./Member";

const User = (props) => {
  return (
    <>
      <h3>User Component</h3>
      <button onClick={props.data}>Call data function</button>

      <Members data1={props.data} />
    </>
  );
};

export default User;
