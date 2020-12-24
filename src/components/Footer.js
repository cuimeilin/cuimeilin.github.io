import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const FooterContent = styled("div")`
  padding: 0 5vw 2.5vw;
`;

const Tagline = styled("div")`
  color: ${darkgreen};
  font-family: ${serif};
  ${notMobile}{
    font-size: 18px;
  }
`;

const Links = styled("div")`
  display: flex;
  flex-direction: column;
  
  a {
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
  }

  a:hover {
    color: ${darkgreen};
  }
`;


export default function Footer() {

    return (
      <FooterContent>
        <Tagline>meilin cui. 2020</Tagline>
        <Links>
          <a href="mailto:meilincui.99@gmail.com">Email</a>
          <a href={"https://www.linkedin.com/in/meilin-cui"} target="_blank">LinkedIn</a>
          <a href={"https://www.github.com/cuimeilin"} target="_blank">Github</a>
        </Links>
      </FooterContent>
    );

}
