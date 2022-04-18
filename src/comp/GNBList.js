import React, { useContext } from "react";
import { DataContext } from "../App";
import ListItem from "./ListItem";

const GNBList = () => {
  const data = useContext(DataContext);

  return (
    <ul className="GNB">
      {data.map((it) => (
        <ListItem key={it.id} {...it} />
      ))}
    </ul>
  );
};

export default React.memo(GNBList);
