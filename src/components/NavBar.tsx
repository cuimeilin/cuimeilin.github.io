import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const StyledNav = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${white};
  margin: 2em 0 1.5em;
  font-family: ${title};

  ${notMobile} {
    margin: 2.5em 0 1em;
  }
`;

const Title = styled("div")`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  color: ${darkgreen};
  font-size: 20px;
  font-weight: 500;

  ${notMobile} {
    font-size: 36px;
  }
`;

const Links = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;

  ${notMobile} {
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  margin: 0.5em 1em;
  color: ${lightgreen};
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <>
        <StyledNav>
          <Link to="/" style={{ textDecoration: "none", color: "327034" }}>
            <Title>meilin cui</Title>
          </Link>
          <Links>
            <StyledLink to="/projects">projects</StyledLink>
            <StyledLink to="/about">about</StyledLink>
            <a
              style={{
                textDecoration: "none",
                boxSizing: "border-box",
                margin: "0.5em 1em",
                color: "#A7D2A8",
              }}
              target="_blank"
              href={
                "https://drive.google.com/file/d/1iXLkxffNwf5DAAamJjFIce1toQ7qDGIr/view?usp=sharing"
              }
            >
              resume
            </a>
          </Links>
        </StyledNav>
      </>
    );
  }
}
