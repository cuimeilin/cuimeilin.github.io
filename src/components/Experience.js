import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile, largeDesktop } = mediaQueries;

const ExperienceContent = styled("div")`
  width: 77vw;

  ${notMobile} {
    width: 45vw;
  }
  ${largeDesktop} {
    width: 900px;
  }
`;

const Experiences = styled("div")`
  margin-bottom: 1.5em;
  font-size: 15px;
  line-height: 1.5;

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

const Experiences1 = styled("div")`
  font-size: 15px;
  line-height: 1.5;

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

const Links = styled("div")`
  color: ${darkgreen};
  font-family: ${sanserif};
  font-weight: 600;
  margin: 0.5em 0;
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
  line-height: 1.6em;
  a {
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
    font-weight: normal;
  }

  a:hover {
    color: ${darkgreen};
  }
`;

const Text = styled("text")`
  color: ${green};
`;

const Past = styled("div")`
  ul {
    list-style-type: square;
    padding-left: 1em;
    margin: 0;

    ${notMobile} {
      font-size: 18px;
    }
  }
`;

export default function Experience() {
  return (
    <ExperienceContent>
      <Heading>INVOLVEMENT & EXPERIENCE</Heading>
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
        <Description style={{ marginBottom: "0.5em" }}>
          Implementing interactive tools and components for story-specific
          flatpages using <Text>React.js</Text>, <Text>Typescript</Text>, and{" "}
          <Text>JavaScript</Text>.
        </Description>
        <Description>
          Currently working on Features, a website dedicated to External Sites
          projects, and Carbon, a flatpage builder to streamline the request and
          deployment process.
        </Description>
        <Links>Previous pages:</Links>
        <Past>
          <ul>
            <li>
              <a
                href="https://features.dailybruin.com/2020/creativity-longterm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                From Molecules to Masterpieces →
              </a>
              <Description style={{ marginBottom: "0.5em" }}>
                Created the scrolling progress bar on a page that examines the
                trait of creativity.
              </Description>
            </li>
            <li>
              <a
                href="https://covidstories.dailybruin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                COVID Student Stories →
              </a>
              <Description style={{ marginBottom: "0.5em" }}>
                Designed the story display on a site where students share their
                experiences with the cornavirus pandemic.
              </Description>
              <Description style={{ marginBottom: "0.5em" }}>
                Awarded fifth place in the Print and Digital category of the
                Associated Collegiate Press 2020 COVID-19 Coverage competition.
              </Description>
            </li>
            <li>
              <a
                href="https://features.dailybruin.com/2020/ballpark-figures/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                2020 Winter Enterprise →
              </a>
              <Description>
                Developed the quiz on a page that breaks down the spending of
                UCLA Athletics and its finanical future in light of the
                cornavirus pandemic.
              </Description>
            </li>
          </ul>
        </Past>
      </Experiences>
      <Experiences1>
        <a
          href="https://cleanconsulting.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clean Consulting at UCLA →
        </a>
        <Position>Graphic Designer</Position>
        <Timeframe>May 2019 - May 2020</Timeframe>
        <Description style={{ marginBottom: "0.5em" }}>
          Designed flyers, posters, and social media posts using{" "}
          <Text>Affinity products</Text> to promote events that raised awareness
          towards sustainable practices and behaviors.
        </Description>
        <Description>
          Revamped the organization's logo and shirt design for the 2020
          merchandise fundraiser.
        </Description>
      </Experiences1>
    </ExperienceContent>
  );
}
