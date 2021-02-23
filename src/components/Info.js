import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile, largeDesktop } = mediaQueries;

const Briefly = styled("div")`
  width: 77vw;
  font-family: ${sanserif};

  ${notMobile} {
    width: 45vw;
  }
  ${largeDesktop} {
    width: 900px;
  }

  ul {
    list-style-type: square;
    color: ${darkgrey};
    padding-left: 1em;
    margin: 0;
    font-size: 15px;
    line-height: 1.5;

    ${notMobile} {
      font-size: 18px;
    }
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

const Heading = styled("div")`
  color: ${darkgreen};
  font-family: ${serif};
  margin-bottom: 0.5em;
  font-size: 18px;

  ${notMobile} {
    font-size: 23px;
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
  color: ${beige};
`;

export default function Info() {
  return (
    <Briefly>
      <Heading>Website information:</Heading>
      <Subtext>
        Originally created in 2017 using vanilla HTML and CSS, the design of
        this website has been in constant development. Currently, it is
        bootstrapped with{" "}
        <a
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App
        </a>{" "}
        , coded using JavaScript, and hosted on{" "}
        <a
          href="https://pages.github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Pages
        </a>
        .
      </Subtext>
      <Subtext>
        I really enjoy earthy tones and neutrals, so the text colors used are{" "}
        <Text style={{ backgroundColor: "#327034" }}>#327034</Text>,{" "}
        <Text style={{ backgroundColor: "#569957" }}>#569957</Text>, and{" "}
        <Text style={{ backgroundColor: "#303030" }}>#303030</Text>. The
        background is #FFFBF0 and the header/footer border is{" "}
        <Text style={{ backgroundColor: "#D4C39B", color: "#303030" }}>
          #D4C39B
        </Text>
        .
      </Subtext>
      <Subtext1>
        I'm a fan of using both serif and sans-serif fonts, so I use{" "}
        <Text style={{ color: "#303030", fontFamily: "DM Serif Display" }}>
          DM Serif Display
        </Text>{" "}
        for titles and Open Sans for body text.
      </Subtext1>
    </Briefly>
  );
}
