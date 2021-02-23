import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { green, darkgreen, grey, darkgrey, beige, darkbeige, brown } = colors;
const { serif, sanserif } = fonts;
const { notMobile, largeDesktop } = mediaQueries;

const AboutContent = styled("div")`
  width: 77vw;

  ${notMobile} {
    width: 45vw;
  }

  ${largeDesktop} {
    width: 900px;
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
`;

const Text = styled("text")`
  color: ${brown};
`;

export default function About() {
  return (
    <AboutContent>
      <Maintext>Hi, I'm Meilin (pronouns are they/them).</Maintext>
      <Subtext>
        I was originally admitted to <Text>UCLA</Text> as a mechanical
        engineering major - and was one for 8 quarters - before making the jump
        to mathematics during spring quarter of my third year.
      </Subtext>
      <Subtext>
        I've always enjoyed working with my hands (my favorite project thus far
        has been a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Harmonograph"
          target="_blank"
          rel="noopener noreferrer"
        >
          harmonograph
        </a>{" "}
        that I built in high school) but after being far more enthusiastic about
        a <Text>discrete structures</Text> course than any mechanical
        engineering class I've taken, I realized that it wasn't the major for
        me.
      </Subtext>
      <Subtext>
        Though I haven't been in the mathematics major for long, my academic
        interests are generally in discrete mathematics and its applications in
        (theoretical) computer science. I'm currently really enjoying my{" "}
        <Text>formal languages and automata theory</Text> course.
      </Subtext>
      <Subtext1>
        At the same time, I care about inequity and the issues that come with
        it. Though I appreciate the subjects, I don't think theoretical computer
        science and mathematics are the most accessible fields; I would like to
        use the technical background I've developed on projects that are
        impactful to a larger scope of people.
      </Subtext1>
    </AboutContent>
  );
}
