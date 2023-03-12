import axios from "axios";
import React, { useEffect, useState } from "react";

const TodosListGet = () => {
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
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {/* <h1>Todos list</h1> */}

      {taskList.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid #000",
            padding: 10,
            width: 250,
            height: 200,
            padding: 10,
            margin: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2>User Id : {task.userId}</h2>
          <p>{task.title}</p>
          <h6>{task.completed ? "Completed" : "Pending"}</h6>
        </div>
      ))}
    </div>
  );
};

export default TodosListGet;
