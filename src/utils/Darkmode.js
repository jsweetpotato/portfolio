import { useEffect, useState } from "react";
import "../scss/darkmode.scss";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.querySelector("body").classList.add("dark");
    if (!darkMode) document.querySelector("body").classList.remove("dark");
  }, [darkMode]);

  return (
    <button className="mode-btn" onClick={() => setDarkMode(!darkMode)}>
      <div className="slider"></div>
    </button>
  );
};
export default Darkmode;
