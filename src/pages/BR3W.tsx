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

export default class BR3W extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>BR3W</Header>
          <Description>
            <Byline>
              <Info>
                A coffee machine to customize the brewing and drinking
                experience.
              </Info>
              <Role>machine designer and builder</Role>
              <Text>
                BR3W was a project through UCLA Creative Labs where we aimed to
                design and build a smart coffee machine from scratch.
              </Text>
              <Text>
                As the mechanical engineer on an 11-person team, I used Autodesk
                Inventor to model the housing structure for all of the inner
                electrical and mechanical workings, then constructed it out of
                wood. I also designed some of the specific mechanisms for the
                brewing process.
              </Text>
            </Byline>

            <Body>
              <Section>process</Section>
              <Role>brainstorming</Role>
              <Text>
                As a team, we decided broadly which features we wanted to see in
                a coffee machine.
              </Text>
              <Role>sketching</Role>
              <Text>
                Each member in the build team created an idealized sketch of
                what the machine would look like and how different mechanisms
                would be positioned together. Afterwoards, I compiled the
                sketches and created an initial design.
              </Text>
              <Role>research and refinement</Role>
              <Text>
                We then researched the process of coffee making. Through this,
                we refiend and finalized our feature list and design.
              </Text>
              <Role>3D modeling</Role>
              <Text>
                I modeled the machine components in Autodesk Inventor to ensure
                that all pieces would fit together, while maintaining space for
                electical components. To reduce risk of print failure, we
                decided to make the machine out of wood and only 3D print
                components that required it.
              </Text>
              <Role>building</Role>
              <Text>
                Undeniably the most time-consuming (but rewarding) part of this
                process - building the structure out of wood plants and acrylic.
              </Text>
              <Role>assembly and testing</Role>
              <Text>
                The two weeks prior to Demo Day were dedicated to finishing
                electrical functionalities, then assembling and testing the
                entire coffee machine - electrical components included, to
                ensure that everything would work.
              </Text>
              <Section>results</Section>
              <Text>
                The coffee machine we created by Demo Day allowed the user to
                customize the temperature, cup size, and brew strength of their
                coffee. These settings could be adjusted through an app or via
                the touchscreen connected to the physical machine. The brewing
                process was also monitored to notify the user when their coffee
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
