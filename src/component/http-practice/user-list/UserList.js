import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
// import "./UserList.css";

const UserList = () => {
  const [users, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/users")
      .then((response) => {
        console.log(response);
        setUserList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const columns = [
    {
      label: "Id",
      name: "id",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Name",
      name: "name",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Age",
      name: "age",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: "City",
      name: "city",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  return (
    <>
      {/* <h1>user list</h1> */}

      <MUIDataTable
        title="User List"
        columns={columns}
        data={users}
      ></MUIDataTable>
    </>
  );
};

export default UserList;
