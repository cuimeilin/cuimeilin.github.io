import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { green, darkgreen, grey, darkgrey, beige, darkbeige, brown } = colors;
const { serif, sanserif } = fonts;
const { notMobile } = mediaQueries;

const Divider = styled("div")`
  width: 75%;
  padding: 1.75em 0;
  color: ${brown};
  font-family: ${sanserif};
  font-size: 15px;
  text-align: center;

  ${notMobile} {
    width: 550px;
    font-size: 18px;
  }
`;

export default function Delineate() {
  return <Divider>□ □ □</Divider>;
}
