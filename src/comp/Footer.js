import { useRef } from "react";

function Footer() {
  const modal = useRef(null);

  const openModal = () => {
    modal.current.classList.add("show-modal");
    modal.current.showModal();
  };

  const closeModal = () => {
    modal.current.classList.remove("show-modal");
    modal.current.classList.add("close-modal");
    modal.current.addEventListener(
      "animationend",
      () => {
        modal.current.classList.remove("close-modal");
        modal.current.close();
      },
      { once: true }
    );
  };

  return (
    <footer>
      <div className="left-side"></div>
      <div className="license">ⓒ copyright Jisu Kim 2022</div>
      <div class="right-side">
        <button className="open contact-btn" onClick={openModal}>
          CONTACT
        </button>
      </div>
      <dialog ref={modal} className="modal">
        <h2>안녕하세요! </h2>
        <h3>UI/UX를 좋아하는 개발자 JISU입니다.</h3>
        <hr />
        <div className="madal-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Nostrum necessitatibus fugit fugiat iste nam perspiciatis aliquam mollitia explicabo dolorum quas</p>
        </div>
        <div className="contacts">
          <a className="item" href="https://github.com/jsweetpotato">
            Github
          </a>
          <div className="dot"></div>
          <a
            className="item"
            href="https://resonant-kitchen-b1b.notion.site/4235a6d823fd41658ade513836ea9b52?v=060f694d23f742d7b53a9add5d19fe95">
            Notion
          </a>
          <div className="dot"></div>
          <p className="item">Email</p>
        </div>
        <button className="close" onClick={closeModal}>
          <span></span>
        </button>
      </dialog>
    </footer>
  );
}

export default Footer;
