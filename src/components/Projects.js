import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const ProjectContent = styled("div")`
  width: 70%;
  ${notMobile} {
    width: 525px;
  }
`;
const Project = styled("div")`
  margin-bottom: 1em;
  ${notMobile}{
      margin-bottom: 0;
      font-size: 18px;
      width: 48%;
  }
  a{
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
    font-weight: 600;
  }
  
  a:hover {
    color: ${darkgreen};
  }
`;

const Heading = styled("div")`
  color: ${darkgreen};
  font-family: ${serif};
  margin-bottom: 0.5em;
  font-size: 18px;

  ${notMobile}{
    font-size: 23px;
    margin-bottom: 0.5em;
}
`;

const Content = styled("div")`
  ${notMobile}{
      display: flex;
      justify-content: space-between;
  }
`;

const Name = styled("div")`
  color: ${green};
  font-family: ${sanserif};
  font-weight: 600;
`;
const Organization = styled("div")`
  color: ${grey};
  font-family: ${sanserif};
`;
const Description = styled("div")`
  color: ${darkgrey};
  font-family: ${sanserif};
`;

export default function Projects() {
  return (
    <ProjectContent>
      <Heading>Projects</Heading>
      <Content>
      <Project>
        <a href="https://dl.acm.org/doi/abs/10.1145/3379337.3415826" target="_blank" rel="noopener noreferrer">ROMEO ↗</a>
        <Organization>UCLA Human Computer Interaction Labs</Organization>
        <Description>Designed the user interface for a digital function agumentation tool.</Description>
      </Project>
      <Project>
        <Name>BR3W</Name>
        <Organization>UCLA Creative Labs - Fall 2019</Organization>
        <Description>Manufactured the shell of a smart coffee machine.</Description>
      </Project>
      </Content>
    </ProjectContent>
  );
}
