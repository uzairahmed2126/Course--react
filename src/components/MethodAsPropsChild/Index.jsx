import React from "react";

function Index({ changeState,greetHandler }) {
  return (
    <>
      <h1>{changeState}</h1>
      <button onClick={greetHandler}>Click</button>
    </>
  );
}

export default Index;
