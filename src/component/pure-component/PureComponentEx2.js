import React from "react";
import { PureComponent } from "react";
import User from "./User";

class PureComponentEx2 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  render() {
    // console.log("PureComponentEx2 check-rerendering");
    return (
      <div>
        <h2>Pure Component Ex 2</h2>
        <User count={this.state.count} />
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update count
        </button> */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update count
        </button>
      </div>
    );
  }
}

export default PureComponentEx2;
