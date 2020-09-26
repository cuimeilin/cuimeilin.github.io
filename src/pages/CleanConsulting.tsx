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

export default class CleanConsulting extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>Clean Consulting</Header>
          <Description>
            <Byline>
              <Info>A sustainable student organization.</Info>
              <Role>graphic designer and merchandise illustrator</Role>
              <Text>
                Clean Consulting is an organization at UCLA aiming to empower
                companies to understand and act on their connections with the
                natural world.
              </Text>
              <Text>
                As the lead graphic designer, I created promotional material for
                our project teams and worked on organization branding. I was
                given free range to create a design for our team apparel.
              </Text>
            </Byline>

            <Body>
              <Section>hand lettering</Section>
              <Text>
                We wanted to keep the hand-lettered aspect of the previous
                year's apparel, so I sketched out a few potential options that I
                thought would be suitable for a shirt.
              </Text>

              <Section>sketching</Section>
              <Text>
                Clean Consulting, at its core, is an organization for the
                promotion of sustainable action to preserve nation. I wanted a
                relatively clean and simple design that was still "pretty" and
                ultimately descided on flora and botanical life to serve as
                decorative elements.
              </Text>
              <Text>
                I made some sketches from life and from image references to
                explore variation in plant life and to develop a foundation in
                plant structure.
              </Text>
              <Text>
                I then combined the hand-lettered name with some of the
                botanical life that I sketched out as well as found online, and
                came up with a sketch of what the design would look like.
              </Text>

              <Section>results</Section>
              <Text>
                I used Affinity Designer and the vector pen tool to draw out the
                design.
              </Text>
            </Body>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}
