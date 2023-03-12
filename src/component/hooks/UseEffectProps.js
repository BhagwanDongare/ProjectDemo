import React, { useState } from "react";
import UseEffectUseProps from "./UseEffectUseProps";

const UseEffectProps = (props) => {
  const [count, setCount] = useState(10);
  const [data, setData] = useState(100);

  console.log(props);
  return (
    <>
      <h1>UseEffect using Props</h1>
      <UseEffectUseProps count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update data</button>
    </>
  );
};

export default UseEffectProps;
