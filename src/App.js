import "./App.css";
import Intro from "./pages/intro";
import Fullpage from "./pages/fullpage";
import Landing from "./components/landingpage/landing";
import Register from "./components/welcome and register/register";
import Scrollpage from "./components/autoScrollPage/scroll";
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
          <Route exact path="/register" component={Register}/>
          <Route exact path="/scroll" component={Scrollpage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
