import { Component } from "react";
class MountingPhaseB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
    console.log("LifeCyleB:Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB:getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCyleB:Mount");
  }
  render() {
    console.log("LifeCyleB:render()");
    return <div>LifeCyleB</div>;
  }
}

export default MountingPhaseB;
