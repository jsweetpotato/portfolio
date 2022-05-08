import React, { useEffect, useRef, useState } from "react";
import { data } from "../data/data.js";
import ImageBox from "./ImageBox.js";

let currentHeight;

const ImageSlider = React.forwardRef(({ size, dataType, isSelected }) => {
  const slider = useRef(null);
  const [height, setHeight] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      setHeight(slider.current.clientHeight);
    }
  }, [slider, loaded]);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  const show = () => {
    if (!height) return;
    slider.current.style.height = `${height}px`;
  };

  const hide = () => {
    if (!height) return;
    slider.current.style.height = `0px`;
  };

  console.log("loaded", loaded);

  return (
    <div className="slider-wrapper" ref={slider}>
      <div className="image-slider">
        {data[dataType].map((it) => (
          <ImageBox key={it.id} {...it} style={{ height: isSelected ? show() : hide() }} onLoaded={handleImageLoaded} />
        ))}
      </div>
    </div>
  );
});
export default ImageSlider;
