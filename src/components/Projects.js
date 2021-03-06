import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { green, darkgreen, grey, darkgrey, beige, darkbeige, brown } = colors;
const { serif, sanserif } = fonts;
const { notMobile, largeDesktop } = mediaQueries;

const ProjectContent = styled("div")`
  width: 77vw;

  ${notMobile} {
    width: 45vw;
  }

  ${largeDesktop} {
    width: 900px;
  }
`;
const Project = styled("div")`
  margin-bottom: 1.5em;
  font-size: 15px;
  line-height: 1.6;

  ${notMobile} {
    font-size: 18px;
    width: 48%;
  }
  a {
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

const Project1 = styled("div")`
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1em;

  ${notMobile} {
    font-size: 18px;
    width: 48%;
    margin-bottom: 0;
  }
  a {
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

const Project2 = styled("div")`
  font-size: 15px;
  line-height: 1.6;

  ${notMobile} {
    font-size: 18px;
    width: 48%;
  }
  a {
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

  ${notMobile} {
    font-size: 23px;
    margin-bottom: 0.5em;
  }
`;

const Content = styled("div")`
  ${notMobile} {
    display: flex;
    flex-wrap: wrap;
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

const Tools = styled("div")`
  color: ${brown};
  font-size: 15px;
  margin-top: 0.25em;
  font-family: ${sanserif};

  ${notMobile} {
    font-size: 18px;
  }
`;

export default function Projects() {
  return (
    <ProjectContent>
      <Heading>PROJECTS</Heading>
      <Content>
        <Project>
          <a
            href="https://dl.acm.org/doi/abs/10.1145/3379337.3415826"
            target="_blank"
            rel="noopener noreferrer"
          >
            ROMEO →
          </a>
          <Organization>UCLA Human Computer Interaction Labs</Organization>
          <Description>
            Designed the user interface for a tool that augmented functionality
            of 3D models.
          </Description>
          <Tools>Used: Figma, JavaScript</Tools>
        </Project>
        <Project>
          <Name>BR3W</Name>
          <Organization>UCLA Creative Labs - Fall 2019</Organization>
          <Description>
            Designed and manufactured the shell of a smart coffee machine.
          </Description>
          <Tools>
            Used: Autodesk Inventor, 3D printing, wood manufacturing methods
          </Tools>
        </Project>
        <Project1>
          <Name>Penelope</Name>
          <Organization>
            UCLA Creative Labs - Fall 2019, Winter 2020
          </Organization>
          <Description>
            Modeled assets for a claymation horror video game.
          </Description>
          <Tools>Used: Autodesk Maya</Tools>
        </Project1>
      </Content>
    </ProjectContent>
  );
}
