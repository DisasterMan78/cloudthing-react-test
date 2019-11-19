import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ReactComponent as Logo } from "../public/logo.svg";

const App = () => (
  <div className="App">
    <Logo />
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
