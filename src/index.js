import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

const list = [
  "Hello",
  "World",
  "Lorem",
  "Ipsum",
  "elephant",
  "Roman",
  "Culture"
];

function Index() {
  return (
    <div className="App">
      <App list={list} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
