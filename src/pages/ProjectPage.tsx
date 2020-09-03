import React from "react";
import styled from "@emotion/styled";

import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const Project = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled("div")`
  flex: 1 0 auto;
  min-height: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  ${notMobile} {
    width: 55%;
  }
`;

const ProjectContent = styled("div")`
  display: flex;
  align-items: center;
`;

const Header = styled("div")`
  font-size: 21px;

  font-family: ${title};
  color: ${green};

  ${notMobile} {
    font-size: 32px;
  }
`;

export default class ProjectPage extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <Content>
          <Header>projects</Header>
          <ProjectContent>
            <ProjectList />
          </ProjectContent>
        </Content>
        <Footer />
      </Project>
    );
  }
}
