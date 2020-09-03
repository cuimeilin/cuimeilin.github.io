import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import DailyBruin from "./pages/DailyBruin";
import Penelope from "./pages/Penelope";
import BR3W from "./pages/BR3W";
import CleanConsulting from "./pages/CleanConsulting";
import Stationery from "./pages/Stationery";
import Art from "./pages/Art";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/projects">
            <ProjectPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/dailybruin">
            <DailyBruin />
          </Route>
          <Route exact path="/penelope">
            <Penelope />
          </Route>
          <Route exact path="/br3w">
            <BR3W />
          </Route>
          <Route exact path="/cleanconsulting">
            <CleanConsulting />
          </Route>
          <Route exact path="/stationery">
            <Stationery />
          </Route>
          <Route exact path="/art">
            <Art />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
