import React from "react";
import ProductTask from "./product-task/ProductTask";
import FriendTask from "./friend-task/FriendTask";
import RoutingNavigationEx1 from "./routing-navigation-ex1/RoutingNavigationEx1";
import LazyLoading from "./lazy-loading/LazyLoading";
import ProtectedRoutes from "./protected-routing/ProtectedRoutes";

const RoutingNavigationDemo = () => {
  return (
    <div style={{ textAlign: "start" }}>
      {/* <h1>Routing and Navigation Demo </h1> */}

      {/* <RoutingNavigationEx1 /> */}
      {/* <FriendTask /> */}

      <ProductTask />

      {/* LazyLoading demo*/}
      {/* <LazyLoading /> */}

      {/* Protected routes */}
      {/* <ProtectedRoutes /> */}
    </div>
  );
};

export default RoutingNavigationDemo;
// npm i react-router-dom
