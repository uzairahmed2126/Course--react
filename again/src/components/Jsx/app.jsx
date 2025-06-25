import React from "react";

function Jsx() {
  //   return (
  //     <div>
  //       <h1 style={{ background: "green" }}>Hi</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "hello", className: "dummy-class" },
    null,

    React.createElement("h1", null, "Hi")
  );
}

export default Jsx;
