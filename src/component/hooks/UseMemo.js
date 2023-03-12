import React from "react";
import { useEffect } from "react";
import { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multiCount");
      return count * 5;
    },
    [count]
  );

  //   useEffect(() => {
  //     console.log("kdddddd");
  //   }, [count]);
  return (
    <>
      <h2>UseMemo Hook in React</h2>
      <h3>Count:{count}</h3>
      <h3>Item:{item}</h3>
      <h3>{multiCountMemo}</h3>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
    </>
  );
};

export default UseMemo;
