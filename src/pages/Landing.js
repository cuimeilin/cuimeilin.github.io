import React from "react";
import styled from "@emotion/styled";

import "../App.css";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Coursework from "../components/Coursework";
import Delineate from "../components/Delineate";

const Body = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9vh 0;
`;

function Landing() {
  return (
    <div className="MainBody">
      <Body>
        <Intro />
        <Delineate />
        {/*<Coursework />*/}
        <Experience />
        <Delineate />
        <Projects />
        <Delineate />
        <Coursework />
      </Body>
    </div>
  );
}

export default Landing;
