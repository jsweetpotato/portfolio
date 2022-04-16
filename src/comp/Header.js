import { useState, useEffect } from "react";
import Darkmode from "../utils/Darkmode";
import GNB from "./GNB";
import GNBButton from "./GNBButton";

function Header() {
  return (
    <header>
      <h1>JISUKIM</h1>
      <nav>
        <Darkmode />
        <GNBButton />
        <GNB />
      </nav>
    </header>
  );
}

export default Header;
