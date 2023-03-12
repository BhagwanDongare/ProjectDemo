import React from "react";
import { Link } from "react-router-dom";

const FriendMenu = ({ items }) => {
  return (
    <>
      {/* <h1>Friend menu</h1> */}
      {Array.isArray(items) &&
        items.map((friend, i) => (
          <p key={friend.id}>
            <Link to={`/${friend.id}`}>{friend.name}</Link>
          </p>
        ))}
    </>
  );
};

export default FriendMenu;
