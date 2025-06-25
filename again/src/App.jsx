import { useState } from "react";
import "./App.css";
import { Greet1, Class, Jsx } from "./components/index.js";

// it is imported with curly braces due to single export and export make object that's why here is use object(destructuring)
// import { Greet1 } from "./components/Greet1/app.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Bismillah</h1>
      <h2>After react I have to make resume for frontend</h2>
      {/* <Greet1 /> */}
      {/* We can import with different name but the standard is import with same name */}
      {/* <Greet2 /> */}
      {/* <Class /> */}
      <Jsx />
    </>
  );
}

export default App;
