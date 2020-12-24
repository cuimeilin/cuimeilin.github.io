import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const ExperienceContent = styled("div")`
  width: 60%;
  margin-bottom: 1.5em;
  ${notMobile} {
    width: 500px;
  }
`;
const Experiences = styled("div")`
  margin-bottom: 1em;
  ${notMobile}{
    font-size: 18px;
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
const Company = styled("div")`
  color: ${green};
  font-family: ${sanserif};
`;
const Position = styled("div")`
  color: ${darkgrey};
  font-family: ${sanserif};
`;
const Timeframe = styled("div")`
  color: ${grey};
  font-family: ${sanserif};
  margin-bottom: 0.25em;
  ${notMobile}{
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
        <Company>The Daily Bruin - External Sites</Company>
        <Position>Software Engineering Intern</Position>
        <Timeframe>January 2020 - present.</Timeframe>
        <Description>
          Implementing interactive tools and components for story-specific
          flatpages using React.js, Typescript, and Javascript. Currently
          working on building a website dedicated to External Sites projects.
        </Description>
      </Experiences>
      <Experiences>
        <Company>Clean Consulting at UCLA</Company>
        <Position>Graphic Designer</Position>
        <Timeframe>May 2019 - May 2020.</Timeframe>
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
