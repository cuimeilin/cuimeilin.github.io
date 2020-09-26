import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const AboutDesc = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  ${notMobile} {
    margin: 0 auto;
  }
`;

const Description = styled("div")`
  font-size: 16px;
  line-height: 1.5em;
  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 24px;
  }
`;

export default class AboutTxt extends React.Component {
  render() {
    return (
      <>
        <AboutDesc>
          <Description>
            <p>
              I’m a fourth year at UCLA studying Computational Mathematics.
              Currently developing interactive, story-specific websites for The
              Daily Bruin, our university’s largest newspaper.
            </p>
            <p>
              A fun fact about me: I was a mechanical engineering major for
              nearly three years before coming to terms with the fact that it
              was ultimately not the field for me. I made the switch to
              computational mathematics in March of 2020 and am on track to
              graduate in 2021.
            </p>
            <p>
              I’m looking to further pursue web development and design after i
              complete my undergraduate degree - deciding between applying to
              graduate school or to jobs in industry.
            </p>
            <p>
              If you would like to know more about me, my interests, or my
              experience with changing my major, feel free to reach out by email
              or message me on LinkedIn!
            </p>
          </Description>
        </AboutDesc>
      </>
    );
  }
}
