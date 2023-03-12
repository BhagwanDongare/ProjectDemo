import React from "react";

class ShouldComponentUpdate extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      //   console.log("count data", this.state.count);
      return true;
    }
  }
  render() {
    return (
      <div>
        <h1>should Component Update {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update counter
        </button>
      </div>
    );
  }
}

export default ShouldComponentUpdate;
