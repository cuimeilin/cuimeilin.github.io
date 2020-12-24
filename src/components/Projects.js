import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const ProjectContent = styled("div")`
  width: 60%;
  ${notMobile} {
    width: 500px;
  }
`;
const Project = styled("div")`
  margin-bottom: 1em;
  ${notMobile}{
      margin-bottom: 0;
      font-size: 18px;
      width: 49%;
  }
`;

const Heading = styled("div")`
  color: ${darkgreen};
  font-family: ${serif};
  margin-bottom: 1em;

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
        <Name>ROMEO</Name>
        <Organization>UCLA Human Computer Interaction Labs.</Organization>
        <Description>Digital function agumentation tool.</Description>
      </Project>
      <Project>
        <Name>BR3W</Name>
        <Organization>UCLA Creative Labs - Fall 2019.</Organization>
        <Description>Smart coffee machine.</Description>
      </Project>
      </Content>
    </ProjectContent>
  );
}
