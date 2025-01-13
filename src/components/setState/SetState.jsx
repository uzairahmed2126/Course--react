import React, { Component } from "react";
// function SetState() {
//     return (
//         <div>Hello</div>
//     )
// }
class SetState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("asdf");
    // });
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    console.log(this.state.count);
  }
  incrementMoreThanFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.incrementMoreThanFive()}>Counter!</button>
      </div>
    );
  }
}

export default SetState;
