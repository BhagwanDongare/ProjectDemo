import React from "react";

class ComponentDidMount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Bhagwan",
    };
    // console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentdidmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Component Did Mount {this.state.name}</h1>
        {/* <button onClick={() => this.setState({ name: "Rahul" })}>
          Update name
        </button> */}
      </div>
    );
  }
}

export default ComponentDidMount;
