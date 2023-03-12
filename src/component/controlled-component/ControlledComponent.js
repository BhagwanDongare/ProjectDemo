import React from "react";
import { useState } from "react";

const ControlledComponent = () => {
  const [value, setValue] = useState("0000");
  const [item, setItem] = useState("");
  return (
    <>
      <h1>Controlled Component </h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <h3>Value : {value} </h3>

      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <h3>Item : {item} </h3>
    </>
  );
};

export default ControlledComponent;
