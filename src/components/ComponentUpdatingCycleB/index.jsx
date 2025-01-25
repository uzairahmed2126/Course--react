import React, { Component } from "react";

class ComponentUpdateCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
    console.log("LifeCyleB:Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCyleB:getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCyleB:Mount");
  }
  shouldComponentUpdate() {
    console.log("lifeCycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("lifeCylceA componentDidUpdate");
  }
  render() {
    console.log("LifeCyleB:render()");
    return (
      <div>
        <div>LifeCyleB</div>
      </div>
    );
  }
  handleClick=()=>{
    this.setState({
        msg:"Hello"
    })
  }
  render() {
    return (
      <div>
        ComponentUpdateCycleB
        <button onClick={this.handleClick}>change state</button>
      </div>
    );
  }
}

export default ComponentUpdateCycleB;
