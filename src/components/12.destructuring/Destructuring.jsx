import { Component } from "react";

class Destructuring extends Component {
  constructor() {
    super();
    this.state = {
      state1: {
        countBy2: 0,
      },
      state2: {
        countBy4: 0,
      },
    };
  }

  handleClick = (e) => {
    if (e.target.textContent === "Increment by 2") {
      this.setState((prev) => ({
        state1: { countBy2: prev.state1.countBy2 + 2 },
      }));
    } else {
      this.setState((prev) => ({
        state2: { countBy4: prev.state2.countBy4 + 4 },
      }));
    }
  };

  render() {
    return (
      <div>
        <div>
          <h3>Count by 2 : {this.state.state1.countBy2}</h3>
          <button onClick={this.handleClick}>Increment by 2</button>
        </div>
        <div>
          <h3>Count by 4 : {this.state.state2.countBy4}</h3>
          <button onClick={this.handleClick}>Increment by 4</button>
        </div>
      </div>
    );
  }
}

export default Destructuring;
