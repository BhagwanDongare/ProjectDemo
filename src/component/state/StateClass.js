import React from "react";

class StateClass extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Bhagwan",
    };
  }

  apple() {
    this.setState({ data: "Rahul" });
  }

  render() {
    console.warn("---------------");
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Update Date</button>
      </div>
    );
  }
}

export default StateClass;
