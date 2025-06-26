import React, { Component } from "react";
class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.state.count = this.state.count + 1;
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );
    // if (this.state.count === 20) {
    //   this.setState({
    //     count: (this.state.count = 0),
    //   });
    // }
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        SetState
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Count</button>
      </div>
    );
  }
}

export default SetState;
