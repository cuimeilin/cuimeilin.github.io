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
  margin-bottom: 0.75em;
  font-size: 15px;
  line-height: 1.5;

  ${notMobile} {
    font-size: 18px;
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

const Text = styled("text")`
  color: ${green};
`;

export default function About() {
  return (
    <AboutContent>
      <Maintext>Meilin Cui (they/them).</Maintext>
      <Subtext>
        Fourth year at UCLA studying <Text>mathematics of computation</Text>.
        Currently developing story websites for the Daily Bruin, our
        university's newspaper.
      </Subtext>
      <Subtext1>
        I'm looking to pursue web development or data analytics after I complete
        my undergraduate studies.
      </Subtext1>
    </AboutContent>
  );
}
