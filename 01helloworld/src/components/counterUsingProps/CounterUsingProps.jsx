import React from "react";

function CounterUsingProps({ handleClickFn, children }) {
  return (
    <div>
      {children}
      <button onClick={handleClickFn}>Click Me!!</button>
    </div>
  );
}

export default CounterUsingProps;
