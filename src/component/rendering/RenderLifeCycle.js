import React, { useState } from "react";
import RenderUserProps from "./RenderUserProps";
import RenderUserState from "./RenderUserState";

const RenderLifeCycle = () => {
  const [name, setName] = useState("Bhagwan Dongare");

  return (
    <>
      <h1>Render Life Cycle</h1>
      {/* using props */}
      {/* <RenderUserProps name={name} />
      <button onClick={() => setName("Rahul Dongare")}>Update name</button> */}
      {/* using class state */}
      <RenderUserState />
    </>
  );
};

export default RenderLifeCycle;
