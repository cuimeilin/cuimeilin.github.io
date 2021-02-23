import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const CourseContent = styled("div")`
  width: 77%;
  ${notMobile} {
    width: 550px;
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
  font-family: ${sanserif};

  ${notMobile} {
    font-size: 18px;
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
`;

const Courses1 = styled("div")`
  margin-bottom: 1em;
  font-family: ${sanserif};

  ${notMobile} {
    font-size: 18px;
    width: 47.5%;
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
`;

const Subject = styled("div")`
  color: ${green};
  font-size: 15px;
  line-height: 1.5;
  font-weight: 600;
  font-family: ${sanserif};


  ${notMobile} {
    font-size: 18px;
  }
}
`;

const CourseList = styled("div")`
  color: ${darkgrey};
`;

const Main = styled("div")`
  ${notMobile} {
    display: flex;
    justify-content: space-between;
  }
`;

export default function Coursework() {
  return (
    <CourseContent>
      <Heading>Coursework</Heading>
      <Main>
        <Courses1>
          <Subject>Mathematics:</Subject>
          <ul>
            <li>mathematical imaging</li>
            <li>mathematical cryptology</li>
            <li>optimization</li>
            <li>applied numerical methods</li>
            <li>complex analysis for applications</li>
            <li>real analysis 1</li>
            <li>linear algebra</li>
            <li>discrete structures</li>
            <li>introduction to probability</li>
          </ul>
        </Courses1>
        <Courses1>
          <Subject>Computer Science:</Subject>
          <ul>
            <li>introduction to data science</li>
            <li>formal languages and automata theory</li>
            <li>algorithms and complexity</li>
            <li>introduction to computer graphics</li>
            <li>introduction to computer science (c++)</li>
          </ul>
        </Courses1>
      </Main>
      <Courses>
        <Subject>Mechanical Engineering (there's a lot):</Subject>
        <ul>
          <li>advanced strength of materials</li>
          <li>introduction to microscale and nanoscale manufacturing</li>
          <li>transport phenomena</li>
          <li>dynamics of particles and rigid bodies</li>
          <li>statics and strength of materials</li>
          <li>introduction to engineering thermodynamics</li>
          <li>elementary fluid mechanics</li>
          <li>mathematics of engineering</li>
          <li>introduction to computer-aided design and drafting</li>
          <li>introduction to computer programming with matlab</li>
        </ul>
      </Courses>
      <Courses>
        <Subject>Others of note:</Subject>
        <ul>
          <li>inequality: history of neoliberalism</li>
          <li>asian american women</li>
        </ul>
      </Courses>
    </CourseContent>
  );
}
