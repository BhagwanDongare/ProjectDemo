import React, { PureComponent } from "react";
import PureComponentEx1 from "./PureComponentEx1";
import PureComponentEx2 from "./PureComponentEx2";

class PureComponentDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Pure Component</h1>
        {/* <PureComponentEx1 /> */}
        <PureComponentEx2 />
      </div>
    );
  }
}

export default PureComponentDemo;
