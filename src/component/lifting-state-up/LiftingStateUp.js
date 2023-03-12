import React from "react";
import User from "./User";
const LiftingStateUp = () => {
  const data = "Bhagwan";

  function parentAlert(data) {
    alert(data.name);
  }
  return (
    <>
      {/* pass data from parent to child (alert) */}
      <h3>Lifting State Up</h3>
      <User alert={parentAlert} />
    </>
  );
};

export default LiftingStateUp;
