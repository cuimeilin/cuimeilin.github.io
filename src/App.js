import React from "react";
import styled from "@emotion/styled";

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

function App() {
  return (
    <div className="App">
      <Body>
        <About />
        <Delineate />
        {/*<Coursework />*/}
        <Experience />
        <Delineate />
        <Projects />
        <Delineate />
        <Forfun />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
