import React, { Component } from "react";

class BindingEventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.handleBtn = this.handleBtn.bind(this);
  }
  //   handleBtn() {
  //     this.setState({
  //       message: (this.state.message = "Good Bye!"),
  //     });
  //   }
  handleBtn = () => {
    this.setState({
      message: (this.state.message = "Good Bye!"),
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* first way to handle with bind to this keyword */}
        {/* <button onClick={this.handleBtn.bind(this)}>Click me</button> */}
        {/* Because arrow functions don't have their own this, they capture "this" from their surrounding scope.

In this case, the surrounding scope is your React class component, where this refers to the component instance. */}
        {/* <button onClick={() => this.handleBtn()}>Click me</button> */}
        {/* And in this the "this" binding in constructor */}
        <button onClick={this.handleBtn}>Click me</button>
      </div>
    );
  }
}

export default BindingEventHandler;
