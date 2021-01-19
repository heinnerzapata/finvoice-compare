import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import { Compare } from "./pages/compare";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Compare />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
