import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Todos = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response);
        setTaskList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* <h1>To Dos</h1> */}
      {taskList.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid",
            padding: 10,
            margin: 10,
            width: 400,
            height: 200,
            textAlign: "start",
          }}
        >
          <h3>User Id : {task.userId}</h3>
          <h3>{task.title}</h3>
          <h3>status: {task.complete ? "Completed" : "Pending"}</h3>
        </div>
      ))}
    </div>
  );
};

export default Todos;
