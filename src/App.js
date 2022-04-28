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
    dataType: "responsive"
  },
  {
    id: 1,
    text: "CANVAS",
    dataType: "canvas"
  },
  {
    id: 2,
    text: "REACT",
    dataType: "react"
  },
  {
    id: 3,
    text: "ECT",
    dataType: "ect"
  },
];

function App() {
  const [isMobile, setIsMobile] = useState(start);
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) setIsMobile(false);
    if (window.innerWidth < 700) setIsMobile(true);
  });

  return (
    <DataContext.Provider value={data}>
      <DispatchContext.Provider value={{ isMobile, isOpen, setIsOpen }}>
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
