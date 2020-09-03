import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const Landing = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${lightgreen};
`;

const LandingContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1 0 auto;
`;

const Subtext = styled("div")`
  font-size: 20px;
  text-align: center;
  margin: 0.25em 0;
  width: 70%;

  font-family: ${text};
  color: ${white};

  ${notMobile} {
    font-size: 32px;
  }
`;

const Maintext = styled("div")`
  font-size: 36px;
  font-family: ${title};
  color: ${grey};

  ${notMobile} {
    font-size: 48px;
  }
`;

const PageLinks = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;

  ${notMobile} {
    font-size: 32px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  margin: 0.25em 0;

  font-family: ${text};
  color: ${white};

  ${notMobile} {
    margin: 0.2em 0;
  }
`;

const FooterContent = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: ${white};
  width: 100%;
  box-sizing: border-box;
  padding: 1em 1.5em;
  flex-shrink: 0;

  font-family: ${title};
  color: ${white};
  background-color: ${lightgreen};

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

const FootLinks = styled("div")`
  display: flex;
  align-items: center;
  font-size: 15px;

  ${notMobile} {
    font-size: 18px;
  }
`;

export default class LandingPage extends React.Component {
  render() {
    const footerStyled = {
      margin: "0em 0.5em",
      fontFamily: "DM Serif Display",
    };
    return (
      <Landing>
        <LandingContent>
          <Maintext>meilin cui</Maintext>
          <Subtext>computational mathematics at ucla.</Subtext>
          <Subtext>interested in web development and design.</Subtext>
          <PageLinks>
            <StyledLink to="/projects">projects →</StyledLink>
            <StyledLink to="/about">about →</StyledLink>
            <StyledLink to="/">resume →</StyledLink>
          </PageLinks>
        </LandingContent>
        <FooterContent>
          <Tagline>meilin cui. 2020</Tagline>
          <FootLinks>
            <StyledLink to="/" style={footerStyled}>
              github
            </StyledLink>
            <StyledLink to="/about" style={footerStyled}>
              linkedin
            </StyledLink>
          </FootLinks>
        </FooterContent>
      </Landing>
    );
  }
}
