import React from "react";

function ChildComponent({ greetHandler }) {
  return (
    <div>
      <button onClick={() => greetHandler("child")}>greet parent</button>
    </div>
  );
}

export default ChildComponent;
