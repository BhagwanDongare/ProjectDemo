import React from "react";
import { Table } from "react-bootstrap";

const NestedArrayList = () => {
  const users = [
    {
      name: "Ajay",
      email: "a@gmail.com",
      address: [
        { hn: "01", city: "Pune", country: "India" },
        { hn: "22", city: "Beed", country: "India" },
        { hn: "33", city: "Kurla", country: "India" },
      ],
    },
    {
      name: "Vjay",
      email: "v@gmail.com",
      address: [
        { hn: "02", city: "Beed", country: "India" },
        { hn: "33", city: "Kurla", country: "India" },
      ],
    },
    {
      name: "Sai",
      email: "s@gmail.com",
      address: [
        { hn: "22", city: "Kurla", country: "India" },
        { hn: "01", city: "Pune", country: "India" },
      ],
    },
  ];
  return (
    <>
      <h3>List with Nested Array</h3>
      <Table variant="dark" striped>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </thead>
        {users.map((item, i) => (
          <tbody>
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table variant="dark" striped>
                  <thead>
                    <tr>
                      <td>id</td>
                      <td>House No</td>
                      <td>City</td>
                      <td>Country</td>
                    </tr>
                  </thead>
                  {item.address.map((sub_items, ids) => (
                    <tbody>
                      <tr key={ids}>
                        <td>{ids + 1}</td>
                        <td>{sub_items.hn}</td>
                        <td>{sub_items.city}</td>
                        <td>{sub_items.country}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};

export default NestedArrayList;
