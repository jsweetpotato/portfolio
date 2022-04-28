import ImageSlider from "./ImageSlider";

const ListItem = ({ text, dataType, isSelected, onClick }) => {
  return (
    <li onClick={() => onClick()} className={["list-item", isSelected ? "select" : "not-select"].join(" ")}>
      <span>{text}</span>
      <ImageSlider dataType={dataType} />
    </li>
  );
};
export default ListItem;
