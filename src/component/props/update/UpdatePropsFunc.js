import React, { useState } from "react";
import UpdatePropsFuncDis from "./UpdatePropsFuncDis";

const UpdatePropsFunc = () => {
  const [name, setName2] = useState("Rahul");

  return (
    <div>
      <h1>Props Component</h1>
      <UpdatePropsFuncDis
        name={name}
        email={"a@gmail.com"}
        other={{ address: "Beed", mobile: "00000" }}
      />

      <button
        onClick={() => {
          setName2("Bhagwan");
        }}
      >
        Update name
      </button>
    </div>
  );
};

export default UpdatePropsFunc;
