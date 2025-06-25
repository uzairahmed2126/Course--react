import React, { Component } from "react";
import ComponentUpdateCycleB from "../ComponentUpdatingCycleB";
class ComponentUpdateCycleA extends Component {
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
    console.log("LifeCyleA:render()");
    return (
      <div>
        <div>LifeCyleA</div>
        <MountingPhaseB />
      </div>
    );
  }
  render() {
    return (
      <div>
        ComponentUpdateCycleA
        <ComponentUpdateCycleB />
      </div>
    );
  }
}

export default ComponentUpdateCycleA;
