const GNBButton = ({ onClick }) => {
  const addClass = ({ target }) => {
    target.closest("header").classList.toggle("open");
    onClick();
  };

  return (
    <div className="hamburguer" onClick={addClass}>
      <span></span>
    </div>
  );
};

export default GNBButton;
