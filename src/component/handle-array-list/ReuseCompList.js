import React from "react";
import User from "./User";

const ReuseCompList = () => {
  const users = [
    { name: "Ajay", email: "a@gmail.com", address: "pune" },
    { name: "Vjay", email: "v@gmail.com", address: "pune 1" },
    { name: "Sai", email: "s@gmail.com", address: "pune 2" },
  ];

  return (
    <>
      <h3>Reuse component with list</h3>
      {users.map((item) => (
        <User data={item} />
      ))}
    </>
  );
};

export default ReuseCompList;
