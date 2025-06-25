import React, { Component } from "react";
import ReactMemo from "../ReactMemo";

export default class ReactMemoParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ahmed",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "uzair",
      });
    }, 4000);
  }
  render() {
    return (
      <div>
        <ReactMemo name={this.state.name} />
      </div>
    );
  }
}
