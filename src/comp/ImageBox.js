const ImageBox = ({ id, image, title, tag, url }) => {
  return (
    <div id={id} className="image-box">
      <img src={image} />
      <div className="contents">
        <p className="title">{title}</p>
        <hr />
        <div className="tags">
          {tag.map((it) => (
            <p className="tag">{it}</p>
          ))}
        </div>
      </div>
      <a href={url} className="view page">
        VIEW PAGE
      </a>
    </div>
  );
};

export default ImageBox;
