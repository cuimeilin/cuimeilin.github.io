import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const CourseContent = styled("div")`
  width: 70%;
  margin-bottom: 1.5em;
  ${notMobile} {
    width: 550px;
  }
`;
const Experiences = styled("div")`
  margin-bottom: 1em;
  ${notMobile} {
    font-size: 18px;
  }

  a {
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
    font-weight: 600;
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

const Courses = styled("div")`
  margin-bottom: 1em;
  ${notMobile} {
    font-size: 18px;
  }
`;

const Subject = styled("div")`
  color: ${green};
}
`;

const CourseList = styled("div")`
  color: ${darkgrey};
`;

export default function Coursework() {
  return (
    <CourseContent>
      <Heading>Coursework</Heading>
      <Courses>
        <Subject>Mathematics</Subject>
        <CourseList>
          graph theory, optimization, applied numerical methods, complex
          analysis for applications, real analysis 1, linear algebra, discrete structures
        </CourseList>
      </Courses>
      <Courses>
        <Subject>Computer science</Subject>
        <CourseList>
          formal languages and automata theory, algorithms and complexity, intro
          to computer graphics, intro to computer science 1 & 2
        </CourseList>
      </Courses>
      <Courses>
        <Subject>Mechanical engineering</Subject>
        <CourseList>
          intro to modeling and analysis of dynamic systems, advanced strength
          of materials, intro to microscale and nanoscale manufacturing,
          transport phenomena, dynamics of particles and rigid bodies, statics
          and strength of materials, intro to engineering thermodynamics,
          elementary fluid mechanics, mathematics of engineering, intro to
          computer-aided design and drafting, intro to computer programming with
          matlab
        </CourseList>
      </Courses>
      <Courses>
        <Subject>Others of note</Subject>
        <CourseList>
          inequality: history of neoliberalism, Asian American women, anime,
          intro to probability
        </CourseList>
      </Courses>
    </CourseContent>
  );
}
