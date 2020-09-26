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
          <Header>Clean Consulting</Header>
          <Description>
            <Byline>
              <Info>A sustainable student organization.</Info>
              <Role>graphic designer and merchandise illustrator.</Role>
              <Timeline>May 2019 - May 2020</Timeline>
              <Text>
                Clean consulting is an organization at UCLA aiming to empower
                companies and institutions to understand and act on their
                connections with the natural world.
              </Text>
              <Text>
                As the lead graphic designer, I created promotional material for
                our project teams and worked on organization branding. I was
                given free range to create a design for our apparel fundraiser.
              </Text>
            </Byline>

            <Body>
              <Section>hand-lettering</Section>
              <Text>
                Initially, we wanted to keep the hand-lettered aspect of the
                previous year’s apparel, so I made a few options that would work
                on a shirt, keeping in mind loop size and line weight.
              </Text>

              <Section>art</Section>
              <Text>
                Clean Consulting, at its core, is an organization for the
                promotion of sustainable action to preserve nature. Because of
                this, I decided on flora and botanical life to serve as
                decorative elements.
              </Text>
              <Text>
                I drew samples from life and image references to develop a style
                that would be appropriate.
              </Text>
              <Text>
                We are a club based at UCLA, so I decided to have the breast
                design be of poppies, the state flower of California.
              </Text>

              <Section>iteration and final result</Section>
              <Text>
                I used Affinity Designer and the vector pen tool to draw out the
                design. The sweatshirt was fundraised and printed through
                Bonfire.
              </Text>
            </Body>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}
