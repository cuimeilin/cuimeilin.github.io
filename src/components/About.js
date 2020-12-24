import React from "react";
import styled from "@emotion/styled";

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
`;

export default function About() {
  return (
    <AboutContent>
      <Maintext>Hi, I'm Meilin (they/them).</Maintext>
      <Subtext>
        I'm a fourth year at UCLA studying mathematics of computation.
        Currently, I'm developing story websites for the Daily Bruin, our
        university's newspaper.
      </Subtext>
      <Subtext>
        A fun fact about myself: I was a mechanical engineering major for 8
        quarters before making the jump to switch to mathematics during the
        spring of my third year.
      </Subtext>
      <Subtext>
        I'm looking to pursue web or software development after I complete my
        undergraduate studies. I've also become interested in exploring fields
        of computer science that rely on discrete mathematics. Feel free to
        reach out if you'd like to know more about me, my interests, or just
        want to chat.
      </Subtext>
    </AboutContent>
  );
}
