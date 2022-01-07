import "./App.css";
import Intro from "./pages/intro";
import Fullpage from "./pages/fullpage";
import Landing from "./components/landingpage/landing";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Fullpage} />
          <Route exact path="/welcome" component={Intro} />
          <Route exact path="/build" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
