import React, { Component } from "react";
class FormHandling extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      passWord: "",
    };
  }
  handleMsg = (e) => {
    this.setState({ userName: e.target.value });
  };
  handlePassword = (e) => {
    this.setState({ passWord: e.target.value });
  };
  handleSubmit=(event)=> {
    console.log(`${this.state.userName} ${this.state.passWord}`);
    event.preventDefault();
  }
  render() {
    const { userName, passWord } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="userName">username:</label>
          <input type="text" value={userName} onChange={this.handleMsg} />
          <label htmlFor="passWord">password:</label>
          <input
            type="password"
            value={passWord}
            onChange={this.handlePassword}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default FormHandling;
