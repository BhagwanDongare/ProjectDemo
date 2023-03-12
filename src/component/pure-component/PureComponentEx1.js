import React, { PureComponent } from "react";

class PureComponentEx1 extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  render() {
    console.log("check- rerendering");
    return (
      <div>
        <h1>Pure Component {this.state.count}</h1>
        {/* it avoid the rerendering if value doesn't change */}
        {/* <button onClick={() => this.setState({ count: this.state.count })}> */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update count
        </button>
      </div>
    );
  }
}

export default PureComponentEx1;
