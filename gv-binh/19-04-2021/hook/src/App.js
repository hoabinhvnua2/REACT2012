import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Count from "./components/Count";
import Show from "./components/Show";
import { CountProvide } from "./common/CountContext";

function App() {
  return (
    <div className="App">
      <CountProvide>
        {/* Count là con của CountProvide */}
        <Count />
        {/* <User /> */}
        <Show />
      </CountProvide>
    </div>
  );
}

export default App;
