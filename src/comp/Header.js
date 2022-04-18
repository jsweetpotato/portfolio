import { useEffect, useContext, useState } from "react";
import { DispatchContext } from "../App";

import GNBList from "./GNBList";
import GNBButton from "./GNBButton";

import Darkmode from "../utils/Darkmode";

function Header() {
  const { isMobile } = useContext(DispatchContext);
  const [renderDarkmode, setRenderDarkMode] = useState();

  useEffect(() => {
    isMobile ? setRenderDarkMode("") : setRenderDarkMode(<Darkmode />);
  }, [isMobile]);

  return (
    <header>
      <h1 className='title'>JISUKIM</h1>
      <nav>
        {renderDarkmode}
        <GNBButton />
        <GNBList />
      </nav>
    </header>
  );
}

export default Header;
