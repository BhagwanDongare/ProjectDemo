import React, { useState } from "react";

const StateFunction = () => {
  const [state, setState] = useState("Bhagwan");

  const updateData = () => {
    setState("Rahul");
  };
  console.warn("-----------------");
  return (
    <>
      <h1>{state}</h1>

      <button onClick={updateData}>Update Data</button>
    </>
  );
};

export default StateFunction;
