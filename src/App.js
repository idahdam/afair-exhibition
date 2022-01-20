import "./App.css";
// import Intro from "./pages/intro";
import MainPage from "./components/mainPage/draft4/draft4";
import Draft5 from "./components/mainPage/draft5/draft5";
import Draft6 from "./components/mainPage/draft6/draft6";
import Draft7 from "./components/mainPage/draft7/draft7";
import Draft8 from "./components/mainPage/draft8/draft8";
import Fullpage from "./pages/fullpage";
import Landing from "./components/landingpage/landing";
import Register from "./components/introComp/register";
import Transisi from "./components/introComp/transisi";
import ImgBuild from "./components/imageCarrousel/imageCar";
import PopUpBuild from "./components/popUP/popUp";
import Video from "./components/video";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Question from "./components/question";
import ApparentlyYes from "./components/apparentlyYes";
import AllItems from "./pages/AllItems";
import Exit from "./pages/Exit";
import ToMyselfInTheFuture from "./pages/ToMyselfInTheFuture";
import GoodBye from "./pages/GoodBye";
import AllItemsWithFilters from "./pages/AllItemsWithFilters";
import AllItemsWithSort from "./pages/AllItemsWithSort";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Fullpage} />
          {/* <Route exact path="/welcome" component={Intro} /> */}
          {/* <Route exact path="/main" component={MainPage} /> */}
          <Route exact path="/build" component={Landing} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/popBuild" component={PopUpBuild} /> */}
          <Route exact path="/video" component={Video} />
          {/* <Route exact path="/build" component={Landing} /> */}
          <Route exact path="/question" component={Question} />
          <Route exact path="/transition" component={Transisi} />
          {/* <Route exact path="/imgBuild" component={ImgBuild} /> */}
          <Route exact path="/apparently-yes" component={ApparentlyYes} />
          <Route exact path="/index" component={AllItems} />
          <Route
            exact
            path="/index/filters/:params"
            component={AllItemsWithFilters}
          />
          <Route
            exact
            path="/index/sort/:params"
            component={AllItemsWithSort}
          />
          <Route exact path="/into_the_wayout_future" component={MainPage} />
          <Route
            exact
            path="/into_the_wayout_future/:params"
            component={ImgBuild}
          />
          <Route exact path="/understanding_us" component={Draft5} />
          <Route exact path="/understanding_us/:params" component={ImgBuild} />
          <Route exact path="/bodily_presence" component={Draft6} />
          <Route exact path="/bodily_presence/:params" component={ImgBuild} />
          <Route exact path="/everyone_as_well" component={Draft7} />
          <Route exact path="/everyone_as_well/:params" component={ImgBuild} />
          <Route exact path="/in_where_we_exist" component={Draft8} />
          <Route exact path="/in_where_we_exist/:params" component={ImgBuild} />
          <Route exact path="/exit" component={Exit} />
          <Route
            exact
            path="/to-myself-in-the-future"
            component={ToMyselfInTheFuture}
          />
          <Route exact path="/goodbye" component={GoodBye} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
