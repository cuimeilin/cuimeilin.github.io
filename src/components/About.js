import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const AboutContent = styled("div")`
  width: 60%;
  margin-bottom: 2.5em;

  ${notMobile} {
    width: 500px;
  }
`;
const Maintext = styled("div")`
  color: ${darkgreen};
  font-family: ${serif};
  margin-bottom: 1em;

  ${notMobile}{
    font-size: 28px;
    margin-bottom: 0.5em;
  }
`;
const Subtext = styled("div")`
  color: ${darkgrey};
  font-family: ${sanserif};
  margin-bottom: 0.5em;

  ${notMobile}{
    font-size: 18px;
  }
`;

export default function About() {
  return (
    <AboutContent>
      <Maintext>Hi, I'm Meilin.</Maintext>
      <Subtext>
        I'm a fourth year a UCLA studying mathematics of computation. Currently
        developing interactive, story-specific websites for the Daily Bruin, the
        university's largest newspaper.
      </Subtext>
      <Subtext>
        A fun fact about myself: I was a mechanical engineering major for 8
        quarters before making the jump to switch to mathematics during the
        spring of my third year.
      </Subtext>
      <Subtext>
        I'm looking to pursue web or (math-heavier) software development after I
        complete my undergraduate studies. Feel free to reach out if you'd like
        to know more about me, my interests, or just want to chat.
      </Subtext>
    </AboutContent>
  );
}