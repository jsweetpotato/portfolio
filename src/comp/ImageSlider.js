import React, { useEffect, useRef, useState } from "react";
import { data } from "../data/data.js";
import ImageBox from "./ImageBox.js";
import { animate, finish } from "./animate.js";

const ImageSlider = ({ dataType, isSelected }) => {
  const slider = useRef(null);
  const [height, setHeight] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      setHeight(slider.current.clientHeight);
      console.log(slider.current.clientHeight);
    }
  }, [slider, loaded]);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (!height) return;
    if (!isSelected) {
      slider.current.style.height = `0px`;
    } else {
      animate(slider.current, height);
      setTimeout(() => {
        slider.current.style.height = height + `px`;
      }, 500);
    }
  }, [isSelected, height]);

  return (
    <div className="slider-wrapper" ref={slider}>
      <div className="image-slider">
        {data[dataType].map((it) => (
          <ImageBox key={it.id} {...it} onLoaded={handleImageLoaded} />
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
