import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";

/*
import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Coursework from "./components/Coursework";
import Forfun from "./components/Forfun";
import Delineate from "./components/Delineate";

const Body = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;
`;
*/

import Landing from "./pages/Landing";
import Abt from "./pages/Abt";

import "./App.css";

import { colors, fonts, mediaQueries } from "./shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const Nav = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 77%;
  margin: auto;

  padding-top: 1.5em;

  ${notMobile} {
    width: 550px;
    padding-top: 2em;
  }
`;

const Header = styled("div")`
  font-size: 18px;

  ${notMobile} {
    font-size: 23px;
  }

  a {
    color: ${darkgreen};
    font-family: ${serif};
    text-decoration: none;
    cursor: crosshair;
  }

  a:hover {
    color: ${green};
  }
`;

const Links = styled("div")`
  font-size: 15px;
  width: 40%;

  ${notMobile} {
    width: 150px;
    font-size: 18px;
  }

  display: flex;
  justify-content: space-between;

  a {
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
    font-weight: normal;
  }

  a:hover {
    color: ${darkgreen};
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <Header>
            <Link to="/">mncui</Link>
          </Header>
          <Links>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </Links>
        </Nav>
        <Switch>
          <Route path="/about">
            <Abt />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>

    /*
    <div className="App">
      <Body>
        <About />
        <Delineate />
        <Experience />
        <Delineate />
        <Projects />
        <Delineate />
        <Forfun />
      </Body>
      <Footer />
    </div>
    */
  );
}

export default App;
