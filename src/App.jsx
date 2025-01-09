import { useState, useRef } from "react";
import "./App.css";
// import Practice from "./components/practice/Practice";
import Props from "./components/props/Props";
// import { Jsx, Withoutjsx } from "./components/index";

function App() {
  const [count, setCount] = useState(0);
  const [src, setSrc] = useState(`https://picsum.photos/id/${count}/200/300`);
  const inputRef = useRef(null);
  const handleBtn = (e) => {
    // count++;
    setCount((prev) => prev + 1);
    setSrc(
      `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/200/300`
    );
  };
  return (
    <>
      {/* <Jsx />
      <Withoutjsx /> */}
      <Props name="john" />
      <p>this is children props</p>
      <Props/>
      {/* <Props name="jack" />
      <Props name="eric" />
      <Props name="kyle" /> */}
      <div>
      {/* <Props><h1>this is children props</h1></Props> */}
      </div>
      {/* <h3>Counter App using Functional Components : </h3>
      <img src={src} alt="oops" />
      <button onClick={handleBtn}>Click me</button> */}
    </>
  );
}

export default App;