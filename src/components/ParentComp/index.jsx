import React, { Component, PureComponent } from "react";
import RegComp from "../RegComp";
import PureComp from "../PureComp";
// function ParentComp() {
//   return <div>ParentComp</div>;
// }
class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Uzair",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ahmed",
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        ParentComp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
