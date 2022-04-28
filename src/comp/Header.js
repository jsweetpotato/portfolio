import { useEffect, useContext, useState } from "react";
import { DispatchContext } from "../App";

import GNBList from "./GNBList";
import GNBButton from "./GNBButton";

import Darkmode from "../utils/Darkmode";

function Header() {
  const { isOpen, setIsOpen } = useContext(DispatchContext);

  return (
    <header>
      <div className="header-top">
        <h1 className="title">
          JISUKIM&#8217;&#8202;s
          <br />
          PORTFOLIO
        </h1>
        <div className="right-btn">
          <Darkmode />
          <GNBButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <div className="bg"> </div>
        </div>
      </div>
      <nav>
        <GNBList isOpen={isOpen} />
      </nav>
    </header>
  );
}

export default Header;
