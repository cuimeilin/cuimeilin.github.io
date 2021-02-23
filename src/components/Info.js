import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { green, darkgreen, grey, darkgrey, beige, darkbeige, brown } = colors;
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
      <Heading>A bit about this website:</Heading>
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
        </a>
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
        I like earthy tones and neutrals so the color palette I'm using is
        reflective of that. Links are{" "}
        <Text style={{ backgroundColor: "#358236" }}>#358236</Text> and{" "}
        <Text style={{ backgroundColor: "#246626" }}>#246626</Text> on hover
        (which is also used for headings). Body text is{" "}
        <Text style={{ backgroundColor: "#303030" }}>#303030</Text> with{" "}
        <Text style={{ backgroundColor: "#666666" }}>#666666</Text> for
        subtitles and{" "}
        <Text style={{ backgroundColor: "#996945" }}>#996945</Text> for accents.
        The background is #FFFBF0 and borders are{" "}
        <Text style={{ backgroundColor: "#D4C39B", color: "#303030" }}>
          #D4C39B
        </Text>
        .
      </Subtext>
      <Subtext>
        I'm a fan of using both serif and sans-serif fonts, so I use{" "}
        <Text style={{ color: "#996945", fontFamily: "DM Serif Display" }}>
          DM Serif Display
        </Text>{" "}
        for titles and{" "}
        <Text style={{ color: "#996945", fontWeight: "600" }}>Open Sans</Text>{" "}
        for body text.
      </Subtext>
      <Subtext1>
        Feel free to reach out if any colors or fonts are difficult to read on
        certain screens.
      </Subtext1>
    </Briefly>
  );
}
