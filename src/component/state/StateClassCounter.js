import React from "react";

class StateClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 5,
    };
  }

  increment() {
    // this.setState((counter: this.state.counter+1));
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <>
        <h1>Counter value : {this.state.counter}</h1>
        <button onClick={() => this.increment()}>++</button>
        <button onClick={() => this.decrement()}>--</button>
      </>
    );
  }
}

export default StateClassCounter;
