import React from "react";
import { PureComponent } from "react";

class User extends PureComponent {
  render() {
    console.log("User check-rerendering");
    return (
      <div>
        <h3>User component {this.props.count}</h3>
      </div>
    );
  }
}

export default User;
