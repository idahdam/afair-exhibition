import "./App.css";
import Intro from "./pages/intro";
import Fullpage from "./pages/fullpage";
import Landing from "./components/landingpage/landing";
import Register from "./components/introComp/register";
import Transisi from "./components/introComp/transisi";
import Scrollpage from "./components/autoScrollPage/scroll";
import Video from "./components/video";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Question from "./components/question";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Fullpage} />
          <Route exact path="/welcome" component={Intro} />
          <Route exact path="/build" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/question" component={Question} />
          <Route exact path="/transition" component={Transisi} />
          <Route exact path="/scroll" component={Scrollpage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
