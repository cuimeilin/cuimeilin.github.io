import React from "react";
import styled from "@emotion/styled";

import Forfun from "../components/Forfun";
import Delineate from "../components/Delineate";
import Info from "../components/Info";
import About from "../components/About";

const Body = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9vh 0;
`;

function Abt() {
  return (
    <div className="MainBody">
      <Body>
        <About />
        <Delineate />
        <Forfun />
        <Delineate />
        <Info />
      </Body>
    </div>
  );
}

export default Abt;
