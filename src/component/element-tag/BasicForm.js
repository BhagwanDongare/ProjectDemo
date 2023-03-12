import React, { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [Tnc, setTnc] = useState(false);

  const getFromData = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <div style={{}}>
      <h1>Handle form in react</h1>
      <form onSubmit={getFromData}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <select
          onChange={(e) => {
            setInterest(e.target.value);
          }}
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => {
            setTnc(e.target.checked);
          }}
        />
        <span> Accept terms and conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
