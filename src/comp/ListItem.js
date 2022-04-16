import ImageSlider from "./ImageSlider";

const ListItem = ({ text }) => {
  return (
    <li className="list-item">
      <span>{text}</span>
      <ImageSlider />
    </li>
  );
};
export default ListItem;
