import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const AboutContent = styled("div")``;

const Subtext = styled("div")`
  font-size: 20px;
  margin: 0.25em 0;

  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 20px;
  }
`;

const Maintext = styled("div")`
  font-size: 36px;
  font-family: ${text};
  color: ${green};

  ${notMobile} {
    font-size: 25px;
  }
`;

export default class AboutText extends React.Component {
  render() {
    return (
      <AboutContent>
        <Maintext>Hi, I'm Meilin! Here's a little about me:</Maintext>
        <Subtext>
          I'm a fourth-year mathematics of computation student at UCLA, where
          I'm currently developing interactive, story-specific websites for
          UCLA's largest student newspaper.
        </Subtext>
        <Subtext>
          I like design, discrete mathematics (think logic and graph theory),
          and building things. In fact, I was a mechanical engineering major for
          nearly three years before switching to mathematics of computation.
        </Subtext>
      </AboutContent>
    );
  }
}
