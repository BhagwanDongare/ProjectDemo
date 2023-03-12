import React from "react";

const User = (props) => {
  const data = { name: "Bhagwan Donagre", email: "a@gmail.com" };
  return (
    <>
      {/* <h3>User name: {props.name}</h3> */}
      {/* {console.log(props)} */}
      {/* pass data from child to parent (name) */}

      <button onClick={() => props.alert(data)}>Click Me</button>
    </>
  );
};

export default User;
