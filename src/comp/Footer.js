import { useRef } from "react";

function Footer() {
  const modal = useRef(null);
  const copyalert = useRef(null);

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

  const copyemail = () => {
    navigator.clipboard.writeText("jsweetpotato37@gmail.com");
    copyalert.current.classList.add("visible");
    copyalert.current.addEventListener("animationend", () => {
      copyalert.current.classList.remove("visible");
    });
  };

  return (
    <footer>
      <div className="left-side"></div>
      <div className="license">ⓒ copyright Jisu Kim 2022</div>
      <div className="right-side">
        <button className="open contact-btn" onClick={openModal}>
          CONTACT
        </button>
      </div>
      <dialog ref={modal} className="modal">
        <h2>안녕하세요! </h2>
        <h3>UI/UX와 Canvas를 좋아하는 개발자 지수입니다.</h3>
        <hr />
        <div className="madal-text">
          <p>독학으로 CSS, html, javaScript를 공부했습니다!</p>
          <p>Three.js, CSS3D 등 웹 애니메이션, 3D분야에 관심이 많습니다.</p>
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
          <div className="alert-conatiner">
            <p className="item" onClick={copyemail}>
              Email
            </p>
            <span ref={copyalert} className="copy-alert">
              Copied!!
            </span>
          </div>
        </div>
        <button className="close" onClick={closeModal}>
          <span></span>
        </button>
      </dialog>
    </footer>
  );
}

export default Footer;
