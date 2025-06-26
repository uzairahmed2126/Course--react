import React, { Component, useState } from "react";
// function State() {
//   const [state, setState] = useState("Welcome Visitor");
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button
//         onClick={() => {
//           setState("Thanks For Subscribe!");
//         }}
//       >
//         Subscribe
//       </button>
//     </div>
//   );
// }
class State extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }
  changeState() {
    this.setState({
      message: "Thanks you for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeState()}>Subscribe</button>
      </div>
    );
  }
}
export default State;
