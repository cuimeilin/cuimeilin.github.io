import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const AboutDesc = styled("div")`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;

  flex: 1 0 auto;
  min-height: auto;
`;

const Description = styled("div")`
  line-height: 1.5em;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin: 0.5em 0;
`;

const Project = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled("div")`
  font-size: 18px;

  font-family: ${title};

  ${notMobile} {
    font-size: 28px;
  }
`;
const Info = styled("div")`
  font-size: 17px;

  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 25px;
    padding-top: 0.4em;
  }
`;
const Role = styled("div")`
  font-size: 15px;

  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 22px;
    padding-top: 0.4em;
  }
`;

const Text = styled("div")`
  font-size: 14px;
  font-family: ${text};
  color: ${lightgreen};
  font-weight: bold;

  ${notMobile} {
    font-size: 20px;
    padding-top: 0.4em;
  }
`;

export default class BR3W extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>BR3W</Header>
          <Description>
            <Info>A coffee machine to customize the brewing and drinking experience.</Info>
            <Role>machine designer and builder </Role>
            <Text>under construction</Text>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}
