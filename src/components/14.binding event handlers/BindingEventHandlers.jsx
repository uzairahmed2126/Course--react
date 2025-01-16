import React, { Component } from "react";

class BindingEventHandlers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Hello",
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick=()=>{
    this.setState({
      msg: "Good Bye!",
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>{this.state.msg}</div>
          <button onClick={this.handleClick}>Click me!</button>
          {/* <button onClick={() => this.handleClick()}>Click me!</button> */}
          {/* <button onClick={this.handleClick.bind(this)}>Click me!</button> */}
        </div>
      </div>
    );
  }
}

export default BindingEventHandlers;
