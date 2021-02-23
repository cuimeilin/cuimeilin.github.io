import React from "react";
import styled from "@emotion/styled";

import Footer from "../components/Footer";
import Forfun from "../components/Forfun";
import Coursework from "../components/Coursework";
import Delineate from "../components/Delineate";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const AboutContent = styled("div")`
  width: 77%;

  ${notMobile} {
    width: 550px;
  }
`;
const Maintext = styled("div")`
  color: ${darkgreen};
  font-family: ${serif};
  margin-bottom: 0.5em;
  font-size: 20px;

  ${notMobile} {
    font-size: 28px;
    margin-bottom: 0.5em;
  }
`;
const Subtext = styled("div")`
  color: ${darkgrey};
  font-family: ${sanserif};
  margin-bottom: 0.5em;
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
    font-weight: normal;
  }

  a:hover {
    color: ${darkgreen};
  }
`;

const Subtext1 = styled("div")`
  color: ${darkgrey};
  font-family: ${sanserif};
  font-size: 15px;
  line-height: 1.5;

  ${notMobile} {
    font-size: 18px;
  }
`;

const Body = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9vh 0;

  ${notMobile} {
    padding: 7vh 0;
  }
`;

function Abt() {
  return (
    <div className="App">
      <Body>
        <AboutContent>
          <Maintext>Hi, I'm Meilin.</Maintext>
          <Subtext>
            A fun fact about myself: I was admitted to UCLA as a mechanical
            engineering major - and was one for 8 quarters - before making the
            jump to switch to mathemtics during spring quarter of my third year.
          </Subtext>
          <Subtext>
            I've always enjoyed working with my hands (my favorite project thus
            far has been a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Harmonograph"
              target="_blank"
              rel="noopener noreferrer"
            >
              harmonograph
            </a>{" "}
            that I built in high school) but I realized that mechanical
            engineering was not a career I could pursue. computation.
          </Subtext>
          <Subtext1>
            My academic interests are in discrete mathematics and its
            applications in computer science. I'm also looking to explore how
            data can be leveraged to influence policy and decision-making. After
            graduation, I'm looking to explore web development or data
            analytics.
          </Subtext1>
        </AboutContent>
        <Delineate />
        <Coursework />
        <Delineate />
        <Forfun />
      </Body>
      <Footer />
    </div>
  );
}

export default Abt;
