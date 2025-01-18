import { useState, Component } from "react";
// ConditionalRendering has 4 apparoch 1.variable, 2.ternary, 3.short cercuit operator, 4.if else
// function ConditionalRendering() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   return isLoggedIn ? <div>Hello logger</div> : <div>Hi, guest</div>;
// }

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return <div>Hello Logger</div>;
    } else {
      return <div>Hello Guest</div>;
    }
    // return this.state.isLoggedIn && <div>Hello Logger</div>;
    // return this.state.isLoggedIn ? <div>Hello Logger</div> : <div>Hello Guest</div>;
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Hello Logger</div>;
    // } else {
    //   message = <div>Hello Guest</div>;
    // }
    return <div>{/* <h1>{message}</h1> */}</div>;
  }
}

export default ConditionalRendering;
