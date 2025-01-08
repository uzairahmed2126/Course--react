import React from "react";

function Withoutjsx(name) {
  // return React.createElement("img", { className: "greeting" },"without jsx");
  return React.createElement("img", {
    // className: "greeting",
    src: "https://picsum.photos/id/12/200/300", // Example image URL
    alt: "without jsx"
  });
}

export default Withoutjsx;
