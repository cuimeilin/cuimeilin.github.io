import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { green, darkgreen, grey, darkgrey, beige, darkbeige, brown } = colors;
const { serif, sanserif } = fonts;
const { notMobile, largeDesktop } = mediaQueries;

const Briefly = styled("div")`
  width: 77vw;
  font-family: ${sanserif};

  ${notMobile} {
    width: 45vw;
  }
  ${largeDesktop} {
    width: 900px;
  }

  ul {
    list-style-type: square;
    color: ${darkgrey};
    padding-left: 1em;
    margin: 0;
    font-size: 15px;
    line-height: 1.6;

    ${notMobile} {
      font-size: 18px;
    }
  }

  a {
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
    font-weight: normal;
  }

  a:hover {
    color: ${darkgreen};
  }
`;

const Heading = styled("div")`
  color: ${darkgreen};
  font-family: ${serif};
  margin-bottom: 0.5em;
  font-size: 18px;

  ${notMobile} {
    font-size: 23px;
    margin-bottom: 0.5em;
  }
`;

export default function Forfun() {
  return (
    <Briefly>
      <Heading>A bit about me:</Heading>
      <ul>
        <li>
          I was born and raised in Roxbury, NJ before moving to San Diego, CA in
          2018.
        </li>
        <li>
          I was a huge band geek in high school and participated in the North
          Jersey Area Band, pit orchesta, jazz band, and marching band.
        </li>
        <li>
          I like to paint and draw; my favorite mediums are pencil and acrylic.
        </li>
        <li>
          I liked reading The Vegetarian, Our Happy Time, and Goodnight Punpun.
          The next books on my list are Gödel, Escher, Bach and Capital.
        </li>
        <li>
          I've been listening to a lot of{" "}
          <a
            href="https://open.spotify.com/artist/4vGrte8FDu062Ntj0RsPiZ?si=aTsSa5hWTN2ELQqR7JACxg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polyphia
          </a>
          ,{" "}
          <a
            href="https://open.spotify.com/artist/1v7B6ZWa7QRQS3knn3Jvf4?si=aUcx-FflQIyUBnmdSPGhOg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ichika Nito
          </a>
          ,{" "}
          <a
            href="https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1?si=hEe8jhk1RheGzBJnmUhUWQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Darren Korb
          </a>
          , and{" "}
          <a
            href="https://open.spotify.com/artist/4iMO20EPodreIaEl8qW66y?si=5SxHDx9RRh2D_jD1qKPSKQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Still Woozy
          </a>
          .
        </li>
        <li>
          My favorite video games are Persona 5, Fire Emblem 3 Houses, and
          Hades. Currently, I'm playing the Zero Escape trilogy and Link's
          Awakening.
        </li>
      </ul>
    </Briefly>
  );
}
