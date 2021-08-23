import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />,
  </Router>,
  document.getElementById("root")
);

//DONT FORGOR TO ADD DOCKER THINGS: https://www.pluralsight.com/guides/using-react.js-with-docker
