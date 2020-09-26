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

export default class Penelope extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>Penelope</Header>
          <Description>
            <Byline>
              <Info>A claymation horror video game.</Info>
              <Role>asset and environment modeler.</Role>
              <Timeline>October 2019 - March 2020</Timeline>
              <Text>
                Penelope was a project through UCLA Creative Labs where we
                created a video game with mechanisms that took the clay universe
                into consideration.
              </Text>
              <Text>
                As a member of the art and design team, I created concept art
                for the setting and used Autodesk Maya to model environments and
                assets.
              </Text>
            </Byline>

            <Body>
              <Section>concept art</Section>
              <Text>Penelope is a two-part claymation horror game:</Text>

              <Text>
                Part 1: Penelope (you, the player) stops at an Airbnb while on a
                road trip and is dragged into something more sinister than a
                casual pit stop and must escape using the clay nature of herself
                and her environment.
              </Text>
              <Text>
                Part 2: Penelope makes it out of the house and hits the road
                without looking back - however, she is not entirely safe yet.
              </Text>

              <Section>modeling</Section>
              <Text>
                We used Autodesk Maya to create 3D models that were imported
                into Unity for development.
              </Text>

              <Section>results</Section>
              <Text>
                As of December 2019: After 8 weeks of ideation and design, we
                managed to create a semi-working demo of the game. The demo
                included first floor exploration (kitchen, living room, study,
                bathroom) and a preliminary throwing mechanic.
              </Text>
            </Body>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}
