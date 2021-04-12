import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import Customer from "./Customer";
import { useState } from "react";

function App() {
  const [data, setData] = useState(0)
  return (
    <div className="App">
      xin chào
      <Product  />
      <Customer last={data}/>
      <button onClick={() => setData(data + 1)}>+</button>
    </div>
  );
}

export default App;
