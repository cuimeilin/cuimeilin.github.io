import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { colors, fonts } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;

const AboutDesc = styled("div")`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;

  flex: 1 0 auto;
  min-height: auto;
`;

const Header = styled("div")`
  font-size: 21px;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
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

const Name = styled("div")`
  font-size: 18px;
`;
const Info = styled("div")`
  font-size: 17px;
`;
const Role = styled("div")`
  font-size: 15px;
`;

export default class Stationery extends React.Component {
  render() {
    return (
      <Project>
        <NavBar />
        <AboutDesc>
          <Header>Custom Stationery</Header>
          <Description>
            <Info>memo pad and calendar designs</Info>
          </Description>
        </AboutDesc>
        <Footer />
      </Project>
    );
  }
}