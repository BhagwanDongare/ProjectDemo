import React, { useState } from "react";

const TextHideShowButton = () => {
  const [status, setStatus] = useState(false);

  return (
    <>
      {status ? <h1>Show hide text on button click </h1> : null}
      <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(false)} style={{ marginLeft: "10px" }}>
        Hide
      </button>
    </>
  );
};

export default TextHideShowButton;
