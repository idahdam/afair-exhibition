import './App.css';
import Intro from './pages/intro';
import Fullpage from './pages/fullpage';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/welcome" component={Intro} />
        </Switch>
      </Router>
      </>
  );
}

export default App;
