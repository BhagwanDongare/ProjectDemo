import React from "react";
import { useRef } from "react";

const UnControlledComponent = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    console.log("input field 1 ref value : ", inputRef.current.value);
    console.log("input field 2 ref value : ", inputRef2.current.value);
    const input3 = document.getElementById("input3").value;
    console.log("input field 3 ref value", input3);
  }
  return (
    <>
      <h1>UnControlled Component</h1>
      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef} />
        <br />
        <br />
        <input type="text" ref={inputRef2} />
        <br />
        <br />
        <input type="text" id="input3" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UnControlledComponent;
