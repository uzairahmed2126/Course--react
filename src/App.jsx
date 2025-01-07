import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const handleBtn = (e) => {
    // count++;
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1> {count}</h1>
      <button onClick={handleBtn}>Click me</button>
    </>
  );
}

export default App;
// const inputRef = useRef(null);

// const focusInput = () => {
//   inputRef.current.focus(); // Accesses and focuses the input element
// };

// return (
//   <div>
//     <input type="text" ref={inputRef} />
//     <button onClick={focusInput}>Focus Input</button>
//   </div>
// );
