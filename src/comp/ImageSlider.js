import { data } from "../data/data.js";
import ImageBox from "./ImageBox.js";

const ImageSlider = ({ dataType }) => {

  return (
    <div className="image-slider">
      {data[dataType].map(it => <ImageBox {...it}/>)}
    </div>
  );
};
export default ImageSlider;
