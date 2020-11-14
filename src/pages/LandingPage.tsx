import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";
import NavBar from "../components/NavBar";
import About from "../components/About";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const Landing = styled("div")`
  display: flex;
  flex-direction: column;

  ${notMobile} {
    width: 50vw;
    margin: auto;
  }
`;

const AboutContent = styled("div")`
  padding: 1.5em 0;
`;

const ProjectContent = styled("div")`
  padding: 1.5em 0;
`;

const ContactContent = styled("div")`
  padding: 1.5em 0;
`;

const Title = styled("div")`
  font: ${text};
  color: ${darkgreen};
  ${notMobile} {
    font-size: 20px;
  }
`;

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <NavBar />

        <Landing>
          <AboutContent>
            <About />
          </AboutContent>
          <ProjectContent>
            <Title>Projects</Title>
            <ProjectList />
          </ProjectContent>
          <ContactContent>
            <Title>Contact</Title>
          </ContactContent>
        </Landing>
        <Footer />
      </>
    );
  }
}
