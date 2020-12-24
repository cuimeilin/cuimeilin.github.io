import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const ExperienceContent = styled("div")`
  width: 75%;
  margin-bottom: 2.5em;

  ${notMobile} {
    width: 550px;
  }
`;
const Experiences = styled("div")`
  margin-bottom: 1em;
  font-size: 15px;

  ${notMobile} {
    font-size: 18px;
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
/*
const Company = styled("div")`
  color: ${green};
  font-family: ${sanserif};
`;
*/
const Position = styled("div")`
  color: ${darkgrey};
  font-family: ${sanserif};
`;
const Timeframe = styled("div")`
  color: ${grey};
  font-family: ${sanserif};
  margin-bottom: 0.25em;
  font-size: 14px;

  ${notMobile} {
    font-size: 16px;
  }
`;
const Description = styled("div")`
  color: ${darkgrey};
  font-family: ${sanserif};
`;

export default function Experience() {
  return (
    <ExperienceContent>
      <Heading>Experience</Heading>
      <Experiences>
        <a
          href="https://dailybruin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Daily Bruin - External Sites →
        </a>
        <Position>Software Engineering Intern</Position>
        <Timeframe>January 2020 - present</Timeframe>
        <Description>
          Implementing interactive tools and components for story-specific
          flatpages using React.js, Typescript, and Javascript. Currently
          working on building a website dedicated to External Sites projects.
        </Description>
      </Experiences>
      <Experiences>
        <a
          href="https://cleanconsulting.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clean Consulting at UCLA →
        </a>
        <Position>Graphic Designer</Position>
        <Timeframe>May 2019 - May 2020</Timeframe>
        <Description>
          Designed flyers, posters, and social media posts using Affinity
          products to promote events that raised awareness towards sustainable
          practices and behaviors. Revamped the organization's logo and shirt
          design for the 2020 merchandise fundraiser.
        </Description>
      </Experiences>
    </ExperienceContent>
  );
}
