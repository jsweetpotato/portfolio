import { useCallback } from "react";

const ImageBox = ({ id, image, title, tag, url, onLoaded }) => {
  const handleLinkClick = useCallback((e) => {
    e.preventDefault();
    window.open(url, "", "_blank");
  }, [url]);

  return (
    <div id={id} className="image-box">
      <img src={image} alt={`${image}-${id}`} onLoad={onLoaded} />
      <div className="contents">
        <p className="image-title">{title}</p>
        <hr />
        <div className="tags">
          {tag.map((it) => (
            <p key={it} className="tag">
              {it}
            </p>
          ))}
        </div>
      </div>
      <a href={url} className="view-page" onClick={handleLinkClick}>
        VIEW PAGE
      </a>
    </div>
  );
};

export default ImageBox;
