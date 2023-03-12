import React, { forwardRef } from "react";

const ForwordRefChildComp = (props, inputRef) => {
  return (
    <>
      {/* <h1>Forword Ref Child Component</h1> */}
      <input type="text" ref={inputRef} />
    </>
  );
};

export default forwardRef(ForwordRefChildComp);
