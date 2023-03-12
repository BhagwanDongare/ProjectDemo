import React from "react";
import "./style.css";
import style from "./custom.module.css";

class TypeStyles extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red", backgroundColor: "cyan", padding: "10px" }}>
          Type style 1 in React js
        </h1>
        <h1 className={"primary"}>Type style 2 in React js</h1>
        <h1 className={style.success}>Type style 3 in React js</h1>
      </div>
    );
  }
}

export default TypeStyles;
