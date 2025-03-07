import React, { useMemo, useState } from "react";
// The memo hook is store the previous value and on dependency change it will again render that help to remove unneccesory rendering.
function Memo({ name }) {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...!");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  // console.log("rendering memo component");
  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h2>Count: {count}</h2>
      <h3>Expensive Value: {expensiveCalculation}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
  );
}

export default Memo;
