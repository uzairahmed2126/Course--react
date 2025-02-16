import React, { Component, PureComponent } from "react";

class RegComp extends PureComponent {
  render() {
    return <div>RegComp {this.props.name}</div>;
  }
}

// function RegComp() {
//   return <div>RegComp {this.props.name}</div>;
// }

export default RegComp;
