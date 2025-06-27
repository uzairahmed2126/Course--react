import React from "react";
import ChildComponent from "./ChildComponent/app";

function MethodAsProps() {
  function handleClick(childName) {
    alert(`I'm from ${childName}`);
  }
  return (
    <div>
      <ChildComponent greetHandler={handleClick} />
    </div>
  );
}

export default MethodAsProps;
