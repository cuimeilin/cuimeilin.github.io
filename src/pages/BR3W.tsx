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

export default class BR3W extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>BR3W</Header>
          <Description>
            <Byline>
              <Info>An IOT coffee machine.</Info>
              <Role>designer and manufacturer.</Role>
              <Timeline>October 2019 - December 2019</Timeline>
              <Text>
                BR3W was a project through UCLA Creative Labs where we created a
                coffee machine from scratch.
              </Text>
              <Text>
                As a member of the build team, I used Autodesk Inventor to model
                the machine and constructed it out of wood; I also assisted in
                designing specific mechanics involved in the brewing process.
              </Text>
            </Byline>

            <Body>
              <Section>process</Section>
              <Step>brainstorming</Step>
              <Text>
                As a team, decided broadly on features we would like to see in a
                coffee machine.
              </Text>
              <Step>sketching</Step>
              <Text>
                Members of the build team created sketches of the coffee machine
                including how different mechanisms would work. I compiled the
                sketches and created an initial design.
              </Text>
              <Step>research and refinement</Step>
              <Text>
                Researched the process of coffee making and the requirements for
                brewing espresso. Refined and finalized our feature list and
                design.
              </Text>
              <Step>3D modeling</Step>
              <Text>
                Used Autodesk Inventor to model the coffee machine without the
                electrical work. To reduce the risk of print failure, we decided
                to build the machine out of wood and print what was necessary.
              </Text>
              <Step>building</Step>
              <Text>
                Building the structure out of repurposed wood planks and
                acrylic.
              </Text>
              <Step>assembly and testing</Step>
              <Text>
                The two weeks prior to Demo Day were dedicated to finishing
                electrical functionalities, assembly, testing, and
                troubleshooting.
              </Text>

              <Section>results</Section>
              <Text>
                The MVP we created let the user customize temperature, volume,
                and brew strength. These settings could be adjusted through an
                app or via the touchscreen connected to the physical machine.
                Brew progress was monitored to notify the user when their coffee
                was ready.
              </Text>
            </Body>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}
