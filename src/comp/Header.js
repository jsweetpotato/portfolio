function Header() {
  return (
    <header>
      <a href='/' className="logo">JISUKIM</a>
      <nav>
        <p className="GNB-btn show">WORK</p>
        <div className="GNB-btn close"></div>
        <ul className="GNB">
          <li className="GNB-list">CSS</li>
          <li className="GNB-list">CANVAS</li>
          <li className="GNB-list">ETC</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
