import React, { useState } from "react";

const GetInpBoxValues = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  const getData = (val) => {
    console.log("input value : ", val.target.value);
    setData(val.target.value);
    setPrint(false);
  };

  return (
    <div>
      {print ? <h1>Get input box value is : {data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
};

export default GetInpBoxValues;
