import React, { Component } from "react";
import MethodAsPropsChild from "../MethodAsPropsChild/Index";
class MethodAsPropsParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "I am from Parent",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(childName) {
    this.setState({
      parentName: `I am from ${childName}`,
    });
  }
  render() {
    return (
      <>
        <MethodAsPropsChild
          changeState={this.state.parentName}
          greetHandler={this.handleClick}
        />
      </>
    );
  }
}

export default MethodAsPropsParent;
