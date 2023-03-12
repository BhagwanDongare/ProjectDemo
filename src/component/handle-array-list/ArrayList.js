import React from "react";
import { Table } from "react-bootstrap";
const ArrayList = () => {
  //   const student = ["Ajay", "Vijay", "Sai", "Rahul"];
  const student = [
    { name: "Ajay", email: "a@gmail.com", contact: "111111" },
    { name: "Vijay", email: "v@gmail.com", contact: "22222222" },
    { name: "Sai", email: "s@gmail.com", contact: "333333333" },
    { name: "Rahul", email: "r@gmail.com", contact: "444444444" },
  ];
  return (
    <>
      {/* <h3>Handle Array with list Example</h3> */}
      <h3>List with bootstrap table</h3>

      {/* 
      {student.map((item) => (
        <h3>name is : {item}</h3>
      ))} */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </thead>
        {student.map((item, i) => (
          <tbody key={i}>
            <tr>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};

export default ArrayList;
