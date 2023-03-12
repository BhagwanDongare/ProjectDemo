import React, { Component, useState } from "react";

const StateCounterFun = () => {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Current Count : {counter}</h1>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </>
  );
};

export default StateCounterFun;
