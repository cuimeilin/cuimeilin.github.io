import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const FooterContent = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: ${white};
  width: 100%;
  box-sizing: border-box;
  padding: 1em 1.5em;
  flex-shrink: 0;

  font-family: ${title};
  color: ${lightgreen};

  ${notMobile} {
    padding: 1.5em 2em;
  }
`;

const Tagline = styled("div")`
  display: flex;
  text-decoration: none;
  font-size: 15px;

  ${notMobile} {
    font-size: 18px;
  }
`;

const Links = styled("div")`
  display: flex;
  align-items: center;
  font-size: 15px;

  ${notMobile} {
    font-size: 18px;
  }
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <FooterContent>
        <Tagline>meilin cui. 2020</Tagline>
      </FooterContent>
    );
  }
}
