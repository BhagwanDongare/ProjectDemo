import React from "react";
import { useState } from "react";

const HighOrderComponentEx1 = () => {
  return (
    <div>
      <h1>High Order Component Ex 1</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
};
function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100, height: 100 }}>
      <props.cmp />
    </h2>
  );
}

function HOCGreen(props) {
  return (
    <>
      <h2 style={{ backgroundColor: "green", width: 100, height: 100 }}>
        <props.cmp />
      </h2>
    </>
  );
}

function HOCBlue(props) {
  return (
    <>
      <h2 style={{ backgroundColor: "blue", width: 100, height: 100 }}>
        <props.cmp />
      </h2>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default HighOrderComponentEx1;
