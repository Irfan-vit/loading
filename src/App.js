import { useState } from "react";
import "./styles.css";

export default function App() {
  var [ans, setAns] = useState("loading....");
  return (
    <div className="App">
      <button onClick={() => setAns("")}>loaded</button>
      <h1>{ans}</h1>
    </div>
  );
}
