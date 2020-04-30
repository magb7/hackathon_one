import React from "react";
import "./App.scss";
import "./reset.css";
import Homepage from "./components/Homepage";
import Country from "./components/Country";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Country/:country" component={Country} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
