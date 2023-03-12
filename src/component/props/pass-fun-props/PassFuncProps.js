import React from "react";
import Members from "./Member";
import User from "./User";

const PassFuncProps = () => {
  const getData = () => {
    alert("Welcome to Props");
  };
  return (
    <div>
      <h1>Pass Functions as Props</h1>
      <User data={getData} />
      {/* <div style={{ float: "right" }}>
        <Members data={getData} />
      </div> */}
    </div>
  );
};

export default PassFuncProps;
