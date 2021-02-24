import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { green, darkgreen, grey, darkgrey, beige, darkbeige, brown } = colors;
const { serif, sanserif } = fonts;
const { notMobile, largeDesktop } = mediaQueries;

const Divider = styled("div")`
  width: 77vw;
  padding: 2em 0;
  color: ${darkbeige};
  font-family: ${sanserif};
  font-size: 15px;
  text-align: center;

  ${notMobile} {
    width: 45vw;
    font-size: 18px;
  }

  ${largeDesktop} {
    width: 900px;
  }
`;

export default function Delineate() {
  return <Divider>□ □ □</Divider>;
}
