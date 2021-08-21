import React from "react";
import { Route, Switch } from "react-router-dom";
import DownBadPage from "./pages/downBad";
import Home from "./pages/home/index";

function App() {
  return (
    <>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/downBad">
            <DownBadPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
