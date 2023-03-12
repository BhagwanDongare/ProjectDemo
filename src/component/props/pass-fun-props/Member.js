import React from "react";

const Members = (props) => {
  return (
    <>
      <h3>Members Component</h3>
      <button onClick={props.data1}>Call to member data function</button>
    </>
  );
};

export default Members;
