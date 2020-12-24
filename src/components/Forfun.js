import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { darkgreen, green, darkgrey, grey, beige } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const Briefly = styled("div")`
  width: 75%;
  font-family: ${sanserif};

  ${notMobile} {
    width: 550px;
  }

  ul {
    list-style-type: square;
    color: ${darkgrey};
    padding-left: 1em;
    margin: 0;
    font-size: 15px;

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
      <Heading>Some more about me and things I like (as a treat)</Heading>
      <ul>
        <li>
          I was born and raised in Roxbury, NJ before moving to San Diego, CA in
          2018.
        </li>
        <li>
          I was a huge band geek in high school and participated in the North
          Jersey Area Band, pit orchesta, jazz band, and marching band.
          Recently, I've been trying to learn how to play guitar (with a low
          success rate, unfortunately).
        </li>
        <li>
          My favorite mediums are pencil and acrylic; I'm particularly bad at
          watercolor.
        </li>
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
        {/*
        <li>art mediums I use the most: pencil, acrylic paint</li>
        <li>art mediums I'm particularly bad at: watercolor</li>
        <li>
          books I enjoyed: The Vegetarian, Our Happy Time, Goodnight Punpun
        </li>
        <li>
          books I'm currently reading/plan to read: Godel Escher Bach, Capital
        </li>
        <li>
          artists I have on repeat recently: Polyphia, Ichika Nito, Darren Korb,
          Still Woozy
        </li>
        <li>
          song recommendations: Window (Still Woozy), GOAT (Polyphia), Lament of
          Orpheus (Darren Korb), Love Boy (Phum Viphurit)
        </li>
        <li>
          video games I like: Persona 5, Stardew Valley, Fire Emblem 3 Houses,
          Hades
        </li>
        <li>video games i'm playing: Zero Escape trilogy, Link's Awakening</li>
*/}
      </ul>
    </Briefly>
  );
}
