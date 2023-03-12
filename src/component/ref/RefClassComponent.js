import React from "react";
import { createRef } from "react";

class RefClassComponent extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    // console.log("check input ref");
    console.log((this.inputRef.current.value = "1000"));
  }

  getValue() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "black";
  }

  render() {
    return (
      <>
        <h1>Ref Class Component</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getValue()}>Check Ref</button>
      </>
    );
  }
}

export default RefClassComponent;
