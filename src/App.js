import React from "react";
import styled from "@emotion/styled";

import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { colors, fonts, mediaQueries } from "./shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const Body = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;
`;

function App() {
  return (
    <div className="App">
      <Body>
        <About />
        <Experience />
        <Projects />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
