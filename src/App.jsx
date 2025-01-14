import { useState, useRef, useTransition } from "react";
import "./App.css";
import Props from "./components/props/Props";
// import { Jsx, Withoutjsx } from "./components/index";
import {
  CounterUsingProps,
  NextImageProps,
  Message,
  Destructuring,
} from "./components/index";
import SetState from "./components/setState/SetState";
function App() {
  let randomNum = Math.floor(Math.random() * 200);
  const [count, setCount] = useState(0);
  const [src, setSrc] = useState(
    `https://picsum.photos/id/${randomNum}/200/300`
  );
  function handleClickEvent() {
    setCount((prev) => prev + 1);
    setSrc(`https://picsum.photos/id/${randomNum}/200/300`);
  }

  return (
    <>
      <Destructuring firstName={"Uzair"} 
      lastName={"Ahmed"} />
      {/* <SetState /> */}
      {/* props and state paractice */}
      {/* <Message />
      <CounterUsingProps handleClickFn={handleClickEvent}>
        <h1>{count}</h1>
      </CounterUsingProps>
      <NextImageProps
        src={src}
        alt={`Image Not Found on this id:${randomNum}`}
      /> */}
      {/* <Jsx />
      <Withoutjsx /> */}
      {/* <Props name="john" />
      <p>1 this is children props</p>
      <Props />
      <Props name="john" />
      <p>1 this is children props</p>
      <Props /> */}
      {/* <Props name="jack" />
      <Props name="eric" />
      <Props name="kyle" /> */}
      <div>{/* <Props><h1>this is children props</h1></Props> */}</div>
      {/* <h3>Counter App using Functional Components : </h3>
      <img src={src} alt="oops" />
      <button onClick={handleBtn}>Click me</button> */}
    </>
  );
}

export default App;
