import React from "react";

class RenderUserState extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "abc@gmail.com",
    };
  }
  render() {
    console.log("Render method in State", this.state.email);
    return (
      <div>
        <h1>Render User State</h1>
        <button onClick={() => this.setState({ email: "xyz@gmail.com" })}>
          Update email
        </button>
      </div>
    );
  }
}

export default RenderUserState;
