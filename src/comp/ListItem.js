import { useEffect, useRef } from "react";
import ImageSlider from "./ImageSlider";
import mixin from "../scss/_mixin.scss";

const ListItem = ({ height, text, dataType, isSelected, onClick }) => {
  // 각각의 height를 먼저 지정을 해줌
  // 여기서 isSelect가 변화하면 currenteHeight를 height로 변경시켜줌
  // 그리고 그 currentHeight를 전달

  const li = useRef(null);
  const span = useRef(null);

  useEffect(() => {
    mixin.spanSize = span.current.clientHeight;
  }, [span]);

  useEffect(() => {
    if (span) isSelected ? hide() : show();
  }, [isSelected]);

  const hide = () => {
    span.current.style.height = "0px";
    span.current.style.paddingBlock = "0px";
    span.current.style.opacity = 0;
  };

  const show = () => {
    span.current.style.height = `${mixin.spanSize}px`;
    span.current.style.paddingBlock = "1em";
    span.current.style.opacity = 1;
  };

  return (
    <li ref={li} onClick={() => onClick()} className={["list-item", isSelected ? "select" : "not-select"].join(" ")}>
      <span ref={span}>{text}</span>
      <ImageSlider size={mixin.spanSize} isSelected={isSelected} dataType={dataType} />
    </li>
  );
};
export default ListItem;
