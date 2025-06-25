import React from "react";

function Greet1() {
  return <div>Greet1</div>;
}
// const Greet1 = () => {
//   console.log("Hello I'm Arrow Function");
// };

// it is not working until it is imported with the same exported name
// export const Greet1 = () => (
//   <div>
//     <h1>Hello I'm Arrow Function</h1>
//     <h2>With direct export</h2>
//   </div>
// );
export default Greet1;
