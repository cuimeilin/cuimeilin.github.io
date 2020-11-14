import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, fonts, mediaQueries } from "../shared/config";
const { white, grey, lightgreen, green, darkgreen } = colors;
const { title, text } = fonts;
const { notMobile } = mediaQueries;

const ProjDesc = styled("div")`
  /*
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  ${notMobile} {
    margin: 0 auto;
  }
  */
`;

const Projects = styled("div")`
  /*
  display: flex;
  flex-direction: column;
  */
`;

const Description = styled("div")`
  /*
  line-height: 1.5em;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin: 0.5em 0;

  ${notMobile} {
    box-sizing: border-box;
    padding: 1em 2em 1em 0em;
    width: 50%;
    height: auto;
  }
  */
`;

const Name = styled("div")`
  /*
  font-size: 18px;

  font-family: ${title};
  color: ${green};

  ${notMobile} {
    font-size: 28px;
  }
  */
`;

const Info = styled("div")`
  /*
  font-size: 17px;

  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 25px;
    padding-top: 0.4em;
  }
  */
`;

const Role = styled("div")`
  /*
  font-size: 15px;

  font-family: ${text};
  color: ${grey};

  ${notMobile} {
    font-size: 22px;
    padding-top: 0.4em;
  }
  */
`;

export default class ProjectList extends React.Component {
  render() {
    const linkStyling = {
      textDecoration: "none",
      color: "#414141",
    };
    return (
      <>
        <ProjDesc>
          <Projects>
            <Description>
              <Link to="/dailybruin" style={linkStyling}>
                <Name>Daily Bruin →</Name>
              </Link>
              <Info>UCLA's largest newspaper</Info>
              <Role>features designer and developer</Role>
            </Description>
            <Description>
              <Link to="/penelope" style={linkStyling}>
                <Name>Penelope →</Name>
              </Link>
              <Info>a claymation video game</Info>
              <Role>assets and environment modeler</Role>
            </Description>
            <Description>
              <Link to="/br3w" style={linkStyling}>
                <Name>BR3W →</Name>
              </Link>
              <Info>a smart coffee machine</Info>
              <Role>machiner designer and manufacturer</Role>
            </Description>
            <Description>
              <Link to="/cleanconsulting" style={linkStyling}>
                <Name>Clean Consulting →</Name>
              </Link>
              <Info>sustainable student organization</Info>
              <Role>logo redesigner and merchandise illustrator</Role>
            </Description>
          </Projects>
        </ProjDesc>
      </>
    );
  }
}
