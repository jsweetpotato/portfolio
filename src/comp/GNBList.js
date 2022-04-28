import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../App";
import ListItem from "./ListItem";

const GNBList = ({ isOpen }) => {
  const data = useContext(DataContext);
  const [targetId, setTartgetId] = useState();

  return (
    <ul className="GNB">
      {data.map((it) => (
        <ListItem key={it.id} {...it} onClick={() => setTartgetId(it.id)} isSelected={it.id === targetId} isOpen/>
      ))}
    </ul>
  );
};

export default React.memo(GNBList);
