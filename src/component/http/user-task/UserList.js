import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import style from "./user.css";
import MUIDataTable from "mui-datatables";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // npx json-server src/component/http/server/db.json --watch --port 8888
    axios
      .get("http://localhost:8888/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      label: "ID",
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
      label: "City",
      name: "city",
      options: {
        filter: false,
        sort: true,
      },
    },
  ];

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {/* <h4>User List</h4> */}
      <MUIDataTable title="User List" columns={columns} data={users} />
      {/* <table>
        <tr>
          <th>Sr.no.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>

        {Array.isArray(users) &&
          users.map((user, i) => (
            <tr key={user.id}>
              <td>{i + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))}
      </table> */}
    </div>
  );
};

export default UserList;
