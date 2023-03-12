import React, { useState } from "react";

const ToggleButton = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      {status ? <h1>Toggle Button</h1> : null}
      <button onClick={() => setStatus(!status)}>Toggle Button</button>
    </>
  );
};

export default ToggleButton;
