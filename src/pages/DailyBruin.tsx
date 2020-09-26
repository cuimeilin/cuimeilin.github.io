import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const AboutDesc = styled("div")`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;

  flex: 1 0 auto;
  min-height: auto;
`;

const Description = styled("div")`
  line-height: 1.5em;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin: 0.5em 0;
`;

const Project = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled("div")`
  font-size: 18px;
  color: ${darkgreen};
  font-family: ${title};

  ${notMobile} {
    font-size: 28px;
  }
`;
const Info = styled("div")`
  font-size: 17px;

  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 25px;
    padding-top: 0.4em;
  }
`;
const Role = styled("div")`
  font-size: 15px;

  font-family: ${text};
  color: ${lightgreen};

  ${notMobile} {
    font-size: 22px;
    padding-top: 0.4em;
  }
`;

const Section = styled("div")`
  font-size: 16px;
  font-family: ${title};
  color: ${green};

  ${notMobile} {
    font-size: 23px;
    padding-top: 1em;
  }
`;

const Text = styled("div")`
  font-size: 14px;
  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 20px;
    padding-top: 0.4em;
  }
`;

const Byline = styled("div")``;

const Body = styled("div")``;

export default class DailyBruin extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>Daily Bruin</Header>
          <Description>
            <Byline>
              <Info>
                The Daily Bruin is UCLA's largest newspaper; the External Sites
                team creates interactive, story-specific flatpages.
              </Info>
              <Role>general developer, features designer and developer</Role>
              <Text>
                Features is the website that will show all the previous
                flatpages created by the External Sites team.
              </Text>
              <Text>
                On the team, I work with React.js to develop components for
                these flatpages. I am currently using Figma and React.js to
                create Features.
              </Text>
            </Byline>

            <Body>
              <Section>
                Features is still in development - in the meantime, feel free to
                explore other websites that I've worked on!
              </Section>
              <Role>Unfinished Stories</Role>
              <Text>
                A project thought up by the External Sites team, Unfinished
                Stories is a platform to share student stories in light of the
                coronavirus pandemic.
              </Text>
              <Role>2020 Winter Enterprise</Role>
              <Text>
                An interactive flatpage that breaks down the business that is
                UCLA Athletics and its financial future.
              </Text>
              <Role>2020 Democratic Primaries</Role>
              <Text>
                An interactive flatpage that breaks down the Democratic
                candidates and their platforms.
              </Text>
              <Role>2020 Oscars</Role>
              <Text>An interactive flatpage that talks about the Oscars.</Text>
            </Body>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}
