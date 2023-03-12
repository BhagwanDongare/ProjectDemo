import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect state");
  });
  return (
    <>
      <h1>Use effect in React {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>Update counter</button>
    </>
  );
};

export default UseEffect;
