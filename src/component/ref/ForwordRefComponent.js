import React from "react";
import { useRef } from "react";
import ForwordRefChildComp from "./ForwordRefChildComp";

const ForwordRefComponent = () => {
  const inputRef = useRef(null);

  function updateInput() {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }
  return (
    <>
      <h1>Forword Ref Component</h1>
      <ForwordRefChildComp ref={inputRef} />
      <br />
      <br />
      <button onClick={updateInput}> Update InputBox</button>
    </>
  );
};

export default ForwordRefComponent;
