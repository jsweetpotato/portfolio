const GNBButton = () => {
  const addClass = ({ target }) => {
    target.closest("header").classList.toggle("open");
  };

  return (
    <div className="hamburguer" onClick={addClass}>
      <span></span>
    </div>
  );
};

export default GNBButton;
