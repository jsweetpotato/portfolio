import "./scss/index.scss";
import Header from "./comp/Header";
import Canvas from "./comp/Canvas";
import Footer from "./comp/Footer";
import React, { useState } from "react";

export const DataContext = React.createContext();
export const DispatchContext = React.createContext();

let start = true;
if (window.innerWidth >= 700) {
  start = false;
}

const data = [
  {
    id: 0,
    text: "RESPONSIVE WEB",
  },
  {
    id: 1,
    text: "CANVAS",
  },
  {
    id: 2,
    text: "REACT",
  },
  {
    id: 3,
    text: "ECT",
  },
];

function App() {
  const [isMobile, setIsMobile] = useState(start);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) setIsMobile(false);
    if (window.innerWidth < 700) setIsMobile(true);
  });

  return (
    <DataContext.Provider value={data}>
      <DispatchContext.Provider value={{ isMobile }}>
        <div className="App">
          <Header />
          <Canvas />
          <Footer />
        </div>
      </DispatchContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
