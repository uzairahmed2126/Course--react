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
class Event extends Component{
    handleClick() {
        console.log('button fired');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
export default Event;
