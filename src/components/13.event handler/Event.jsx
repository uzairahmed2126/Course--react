import { Component } from "react";
// function Event() {
//   let root = document.getElementById("event");
//   function handleClick() {
//     alert(<h1>button fire!</h1>);
//   }
//   return (
//     <div id="event">
//       <button onClick={handleClick}>Click me! </button>
//     </div>
//   );

// }
class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
    };
  }
  handleClick() {
    this.setState({
      msg: "Heyy!",
    });
    console.log("button fired");
  }
  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick.bind(this)}>Click me!</button>
      </div>
    );
  }
}
export default Event;
