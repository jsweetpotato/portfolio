import { useEffect, useState, useContext } from "react";
import { DispatchContext } from "../App";

const GNBButton = () => {
  const { isMobile } = useContext(DispatchContext);
  const [GNBButton, setGNBButton] = useState();

  const addClass = ({ target }) => {
    target.closest("nav").classList.toggle("open");
  };

  useEffect(() => {
    isMobile
      ? setGNBButton(
          <div className="hamburguer">
            <span></span>
          </div>
        )
      : setGNBButton(<p className="work">WORK</p>);
  }, [isMobile]);

  return (
    <button className="GNBBtn" onClick={addClass}>
      {GNBButton}
    </button>
  );
};

export default GNBButton;
