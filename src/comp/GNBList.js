import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import ListItem from "./ListItem";

const GNBList = ({ isOpen, isNavClicked }) => {
  const data = useContext(DataContext);
  const [targetId, setTartgetId] = useState();

  useEffect(() => {
    if (!isOpen) return setTartgetId();
  }, [isOpen]);

  useEffect(() => {
    if (!isNavClicked) setTartgetId();
  }, [isNavClicked]);

  return (
    <nav>
      <ul className="GNB">
        {data.map((it) => (
          <>
            <div className="line"></div>
            <ListItem
              key={it.id}
              {...it}
              onClick={() => {
                setTartgetId(it.id);
              }}
              isSelected={it.id === targetId}
              isOpen
            />
          </>
        ))}
        <div className="line"></div>
      </ul>
    </nav>
  );
};

export default React.memo(GNBList);
