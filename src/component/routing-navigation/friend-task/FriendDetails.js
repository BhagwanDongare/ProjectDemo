import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = ({ items }) => {
  const { id } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const friendObj = items.filter((obj) => obj.id == id)[0];
    // console.log(friendObj);
    if (friendObj) {
      setFriend(friendObj);
    }
  }, [id]);
  return (
    <>
      <h1>Friend details</h1>

      <img
        src={`assets/${friend.avatar}`}
        style={{
          width: "200px",
          height: "200px",
          display: "block",
          margin: "auto",
          borderRadius: 150,
        }}
      />
      <h4>Name : {friend.name}</h4>
      <h4>Mobile : {friend.mobile}</h4>
      <h4>Email : {friend.email}</h4>
      <h4>City : {friend.city}</h4>
    </>
  );
};

export default FriendDetails;
