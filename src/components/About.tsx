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
              I am fourth year at UCLA studying computational mathematics.
              Currently developing interactive, story-specific websites for the
              Daily Bruin, our university's largest newspaper.
            </p>
            <p>
              I was a mechanical engineering major (for three years, in fact)
              before realizing that it was ultimately not a field that brought
              me joy or opportunities that I wanted to pursue.
            </p>
            <p>
              I'm looking to further pursue web development and design after I
              complete my undergraduate degree - currently deciding between
              applying to graduate school or to jobs in industry.
            </p>
            <p>
              If you would like to know more about me, my interests, or my
              experience with changing my major, feel free to reach out!
            </p>
          </Description>
        </AboutDesc>
      </>
    );
  }
}
