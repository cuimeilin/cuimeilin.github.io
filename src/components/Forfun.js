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
    line-height: 1.5;

    ${notMobile} {
      font-size: 18px;
    }
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
          Outside of academics, I like drawing and painting, playing video
          games, and watching anime.
        </li>
        <li>My favorite art mediums are pencil and acrylic.</li>
        <li>
          I liked reading The Vegetarian, Our Happy Time, and Goodnight Punpun.
          The next books on my list are Gödel, Escher, Bach and Capital.
        </li>
        <li>
          I've been listening to a lot of Polyphia, Ichika Nito, Darren Korb,
          and Still Woozy.
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
