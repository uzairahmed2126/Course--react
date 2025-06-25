import React, { Component, PureComponent } from "react";
import RegComp from "../RegComp";
import PureComp from "../PureComp";
import Memo from "../Memo";
// function ParentComp() {
//   return <div>ParentComp</div>;
// }
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Uzair",
    };
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        name: "Ahmed", // Updating name
        count: prevState.count + 1, // Updating count properly
      }));
    }, 2000);
  }
  render() {
    return (
      <div>
        ParentComp
        <Memo name={this.state.count} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
