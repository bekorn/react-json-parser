import React from "react";
import ReactDOM from "react-dom";
import JsonParser from "./JsonParser.jsx";
import "./styles.css";

import large_json from "./large.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tiny Json Parser</h1>
        <JsonParser json_data={large_json} />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
