import React from "react";

function KeyAndPattern() {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    // this is working but react don't know who to render and more that's why we have to give unique key using key
    <div>
      {values.map((num) => (
        <p key={num}>{num}</p>
      ))}
    </div>
  );
}

export default KeyAndPattern;
