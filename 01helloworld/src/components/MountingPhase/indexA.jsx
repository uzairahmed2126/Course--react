import { Component } from "react";
import MountingPhaseB from "../MountingPhaseB/indexB";
class MountingPhase extends Component {
  // first constructor is initilize then the getDerivedStateFromProps will then the render() then the other stuff like componentDidMount
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
    console.log("LifeCyleA:Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCyleA:getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCyleA:Mount");
  }
  render() {
    console.log("LifeCyleA:render()");
    return (
      <div>
        <div>LifeCyleA</div>
        <MountingPhaseB />
      </div>
    );
  }
  // constructor(props) {
  //   super(props);
  //   this.state = { favoritecolor: "red" };
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ favoritecolor: "blue" });
  //   }, 1000);
  // }
  // // after constructor the render is running at the end the componentDidMount is fire
  // render() {
  //   return (
  //     <h1 style={{ color: `${this.state.favoritecolor}` }}>
  //       {" "}
  //       My Favorite Color is {this.state.favoritecolor}
  //     </h1>
  //   );
  // }
}

export default MountingPhase;
