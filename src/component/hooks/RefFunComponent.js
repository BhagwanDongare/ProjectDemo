import React from "react";
import { useRef } from "react";

const RefFunComponent = () => {
  const inputRef = useRef(null);

  function HandleInput() {
    console.log("function call");
    inputRef.current.value = "1000";
    inputRef.current.focus();
    // inputRef.current.style.display = "none";
  }

  return (
    <>
      <h1>Ref component in function</h1>

      <input type="text" ref={inputRef} />

      <button onClick={HandleInput}>Handle Input</button>
    </>
  );
};

export default RefFunComponent;
