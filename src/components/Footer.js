import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const FooterContent = styled("div")`
  padding: 0 5vw 3vh;
  
  ${notMobile}{
    padding: 0 0 3vh;
    display: flex;
    justify-content: space-between;
    width: 750px;
  }
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
  font-size: 15px;
  
  a {
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
  }

  a:hover {
    color: ${darkgreen};
  }

  ${notMobile}{
    font-size: 16px;
    text-align: right;
  }
`;


export default function Footer() {

    return (
      <FooterContent>
        <Tagline>meilin cui. 2021</Tagline>
        <Links>
          <a href="mailto:meilincui.99@gmail.com">email</a>
          <a href={"https://www.linkedin.com/in/meilin-cui"} target="_blank">linkedin</a>
          <a href={"https://www.github.com/cuimeilin"} target="_blank">github</a>
        </Links>
      </FooterContent>
    );

}
