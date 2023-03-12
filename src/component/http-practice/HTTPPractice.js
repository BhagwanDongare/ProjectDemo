import React from "react";
import AlbumsTask from "./album-task/AlbumsTask";
import ProductsTask from "./products-task/ProductsTask";
import TodosListGet from "./todos-list-get/TodosListGet";
import UserList from "./user-list/UserList";

const HTTPPractice = () => {
  return (
    <div style={{ textAlign: "start" }}>
      {/* <h6>HTTP Practice</h6> */}
      {/* <TodosListGet /> */}

      <UserList />

      {/* <AlbumsTask /> */}

      {/* <ProductsTask /> */}
    </div>
  );
};

export default HTTPPractice;

// Axios package :
// promise based package to handle HTTP request and response

// npm i axios
// for localhost server
// npm i json-server

// for table
// npm i mui-datatables@3.3.7
