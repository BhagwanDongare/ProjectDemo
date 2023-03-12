import React from "react";

class ComponentDidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Bhagwan",
      count: 0,
    };
    console.log("Constructor");
  }

  componentDidUpdate(preProps, preState, snapshot) {
    //   console.log("Component did update");
    console.log(preState.count, this.state.count, snapshot);
    // if (preState.count === this.state.count) {
    //   alert("data already same");
    // }
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  render() {
    console.log("Render");

    return (
      <div>
        <h1>Component Did Update {this.state.count}</h1>
        {/* <button onClick={() => this.setState({ name: "Rahul" })}> */}
        <button onClick={() => this.setState({ count: 1 })}>
          Update count
        </button>
      </div>
    );
  }
}

export default ComponentDidUpdate;
