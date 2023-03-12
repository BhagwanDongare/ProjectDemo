import React from "react";
import PropsFuncDis from "./PropsFuncDis";

const PropsFunc = () => {
  return (
    <div>
      <h1>Props Component</h1>
      <PropsFuncDis
        name={"Rahul"}
        email={"a@gmail.com"}
        other={{ address: "Beed", mobile: "00000" }}
      />
      <PropsFuncDis
        name={"Rahul1"}
        email={"ab@gmail.com"}
        other={{ address: "Pune", mobile: "111111" }}
      />
      <PropsFuncDis
        name={"Rahul5"}
        email={"abc@gmail.com"}
        other={{ address: "Beed", mobile: "2222222222" }}
      />
    </div>
  );
};

export default PropsFunc;
