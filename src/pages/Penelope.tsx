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

export default class Penelope extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>Penelope</Header>
          <Description>
            <Byline>
              <Info>A claymation horro video game.</Info>
              <Role>asset and environment modeler</Role>
              <Text>
                Penelope was a project through UCLA Creative Labs where we aimed
                to create a video game with unique mechanics dependent on the
                clay universe the game was set in.
              </Text>
              <Text>
                As a member of the art and design team, I created concept art
                for the setting and used Autodesk Maya to model environments and
                their components.
              </Text>
            </Byline>

            <Body>
              <Section>conception and concept art</Section>
              <Text>
                Penelope is a claymation horror video game split into two parts:
              </Text>
              <Text>
                Part 1 - Penelope (you, the player) finds herself traveling late
                into the night to make it to her sister's wedding. Becoming
                increasingly tired, she stumbles upon an old Victorian-era house
                that the owner so graciously converted into an Airbnb. With no
                other choice, Penelope enters and finds herself dragged into
                something much more sinister - she must now escape by using the
                clay-like nature of herself and her environment.
              </Text>
              <Text>
                Part 2 - Penelope makes it out of the house! She packs up her
                old station wagon and hits the road without looking back, though
                she is not actually entirely safe yet.
              </Text>
              <Text>
                Below is some of my compcet art and the blueprint of the house I
                created in Google Sketchup.
              </Text>

              <Section>modeling</Section>
              <Text>
                We utilized Autodesk Maya to create 3D models of the environment
                and their components. These were then imported into Unity for
                development. Below are some models from October-December 2019.
              </Text>

              <Section>results (as of december 2019)</Section>
              <Text>
                After 8 weeks of ideation and design, we managed to create a
                semi-working demo of the game. This demo allowed the player to
                explore the first floor of the Airbnb (kitch, living room,
                study, bathroom) as well as introduces a preliminary throwing
                mechanic.
              </Text>
            </Body>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}
