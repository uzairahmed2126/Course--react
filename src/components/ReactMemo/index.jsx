import React from "react";

function ReactMemo({ name = "Hello" }) {
  console.log("Rendering... memo component");
  return <div>{name}</div>;
}

export default React.memo(ReactMemo);
