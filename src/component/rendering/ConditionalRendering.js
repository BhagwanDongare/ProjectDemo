import React, { useState } from "react";

const ConditionalRendering = () => {
  const [loggedIn, setLoggedIn] = useState(3);

  //loggedIn==3
  //1,2,3 is used to check if else conditons using ternary operator

  const getFromData = (e) => {
    console.log(e);
    e.preventDefault();
  };

  console.log(loggedIn);

  return (
    <>
      <h1>Conditional Rendering</h1>
      {loggedIn == 1 ? (
        <h1>Welcome user1 </h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome user2 </h1>
      ) : (
        <h1>Welcome user3 </h1>
      )}
      <input type="text" onChange={(e) => setLoggedIn(e.target.value)} />
      <form onSubmit={getFromData}></form>
    </>
  );
};

export default ConditionalRendering;
