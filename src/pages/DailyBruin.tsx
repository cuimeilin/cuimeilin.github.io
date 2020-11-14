import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, lightgrey, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const Project = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AboutDesc = styled("div")`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;

  flex: 1 0 auto;
  min-height: auto;

  ${notMobile} {
    width: 55%;
  }
`;

const Header = styled("div")`
  font-size: 18px;
  color: ${darkgreen};
  font-family: ${title};
  box-sizing: border-box;
  margin: 0 0 0.5em;

  ${notMobile} {
    font-size: 28px;
  }
`;

const Description = styled("div")`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
`;

const Byline = styled("div")``;

const Info = styled("div")`
  font-size: 17px;

  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 25px;
  }
`;

const Role = styled("div")`
  font-size: 15px;
  line-height: 1.5em;

  font-family: ${text};
  color: ${lightgreen};

  ${notMobile} {
    font-size: 22px;
  }
`;

const Timeline = styled("div")`
  font-size: 14px;
  line-height: 1.5em;
  margin-bottom: 0.5em;

  font-family: ${text};
  color: ${lightgrey};

  ${notMobile} {
    font-size: 20px;
  }
`;

const Body = styled("div")`
  box-sizing: border-box;
`;

const Section = styled("div")`
  font-size: 16px;
  font-family: ${title};
  color: ${green};

  ${notMobile} {
    font-size: 23px;
  }
`;

const Step = styled("div")`
  font-size: 15px;

  font-family: ${text};
  color: ${lightgreen};

  ${notMobile} {
    font-size: 22px;
  }
`;

const Text = styled("div")`
  font-size: 14px;
  font-family: ${text};
  color: ${grey};
  line-height: 1.5em;

  margin-bottom: 0.5em;

  ${notMobile} {
    font-size: 20px;
  }
`;

export default class DailyBruin extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>Daily Bruin</Header>
          <Description>
            <Byline>
              <Info>UCLA's largest newspaper.</Info>
              <Role>general developer, features designer and developer.</Role>
              <Timeline>January 2020 - present</Timeline>
              <Text>
                The External Sites sector of The Daily Bruin develops
                interactive, story-specific flatpages using React.js.
              </Text>
              <Text>
                Currently using Figma and React to develop Features, the
                External Sites-specific website that will host our projects.
              </Text>
            </Byline>

            <Body>
              <Section>
                Features is still in development - in the meantime, feel free to
                check out other flatpages I've worked on during my time on the
                External Sites team.
              </Section>
              <Step>2020 Elections</Step>
              <Text>
                Daily Bruin's coverage of the 2020 elections.
              </Text>
              <Step>COVID Student Stories</Step>
              <Text>
                Sharing student stories in light of the coronavirus pandemic.
              </Text>
              <Step>2020 Winter Enterprise</Step>
              <Text>
                Analyzing the business that iS UCLA Athletics and considering
                its finanical future after the pandemic.
              </Text>
              <Step>2020 Democratic Primaries</Step>
              <Text>
                Breaking down the Democratic Primary candidates and their
                platforms.
              </Text>
            </Body>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}
