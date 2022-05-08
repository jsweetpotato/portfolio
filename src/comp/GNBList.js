import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../App";
import ListItem from "./ListItem";

const GNBList = ({ isOpen }) => {
  const data = useContext(DataContext);
  const [targetId, setTartgetId] = useState();

  useEffect(() => {
    if (!isOpen) return setTartgetId();
  }, [isOpen]);

  return (
    <ul
      className="GNB"
      onClick={({ target }) => {
        if (target.classList.contains("GNB")) setTartgetId();
      }}>
      {data.map((it) => (
        <>
          <div className="line"></div>
          <ListItem
            key={it.id}
            {...it}
            onClick={() => { setTartgetId(it.id);}}
            isSelected={it.id === targetId}
            isOpen
          />
        </>
      ))}
      <div className="line"></div>
    </ul>
  );
};

export default React.memo(GNBList);
