import { useEffect, useState, useContext } from "react";
import { DispatchContext } from "../App";

const GNBButton = () => {
  const { isMobile } = useContext(DispatchContext);
  const [GNBButton, setGNBButton] = useState();

  const addClass = ({ target }) => {
    target.closest("button").classList.toggle("select");
  };

  useEffect(() => {
    isMobile
      ? setGNBButton(
          <div className="hamburguer">
            <span></span>
          </div>
        )
      : setGNBButton(<p className="work">work</p>);
  }, [isMobile]);

  return <button onClick={addClass}>{GNBButton}</button>;
};

export default GNBButton;
