import React from "react";

class RenderUserProps extends React.Component {
  render() {
    console.log("Render mentod in props", this.props.name);
    return (
      <div>
        <h1>RenderUserProps</h1>
      </div>
    );
  }
}

export default RenderUserProps;
