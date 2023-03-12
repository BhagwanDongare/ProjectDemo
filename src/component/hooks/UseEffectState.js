import React, { useEffect, useState } from "react";

const UseEffectState = () => {
  const [count, setCount] = useState(100);
  const [data, setData] = useState(10);

  useEffect(() => {
    console.log("called with count  state");
  }, [count]);

  useEffect(() => {
    console.log("called with data state");
  }, [data]);
  return (
    <>
      <h1>Use effect using State</h1>

      <h3>Count : {count} </h3>
      <h3>Data : {data}</h3>

      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setData(data + 1)}>Update data</button>
    </>
  );
};

export default UseEffectState;
