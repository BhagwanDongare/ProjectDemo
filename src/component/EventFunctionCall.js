import React from "react";

const EventFunctionCall = () => {
  function apple() {
    alert("Hello");
  }
  return (
    <>
      <button onClick={apple}>onClick</button>

      {/* <button onClick={() => apple()}>onClick</button> */}
    </>
  );
};

export default EventFunctionCall;
