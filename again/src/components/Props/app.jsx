import React, { Children } from "react";

function Props(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
      <h4>Work :{props.work}</h4>
    </div>
  );
}

export default Props;
