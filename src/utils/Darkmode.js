import { useContext, useEffect, useState } from "react";
import { DispatchContext } from "../App";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobile, setMobile] = useState();
  const { isMobile } = useContext(DispatchContext);

  useEffect(() => {
    console.log(isMobile);
    isMobile ? setMobile("") : setMobile("not-mobile");
  }, [isMobile]);

  useEffect(() => {
    if (darkMode) document.querySelector("body").classList.add("dark");
    if (!darkMode) document.querySelector("body").classList.remove("dark");
  }, [darkMode]);

  return (
    <button className={`mode-btn ${mobile}`} onClick={() => setDarkMode(!darkMode)}>
      <svg className="sun" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_58_252)">
          <path
            d="M10.3998 4.05566C10.5471 4.05566 10.6884 3.99713 10.7926 3.89295C10.8968 3.78876 10.9553 3.64745 10.9553 3.50011V1.61122C10.9553 1.46388 10.8968 1.32257 10.7926 1.21838C10.6884 1.1142 10.5471 1.05566 10.3998 1.05566C10.2525 1.05566 10.1111 1.1142 10.007 1.21838C9.90277 1.32257 9.84424 1.46388 9.84424 1.61122V3.50011C9.84424 3.64745 9.90277 3.78876 10.007 3.89295C10.1111 3.99713 10.2525 4.05566 10.3998 4.05566Z"
            fill="#fff"
          />
          <path
            d="M10.3998 17.0444C10.2525 17.0444 10.1111 17.103 10.007 17.2072C9.90277 17.3113 9.84424 17.4526 9.84424 17.6V19.4889C9.84424 19.6362 9.90277 19.7775 10.007 19.8817C10.1111 19.9859 10.2525 20.0444 10.3998 20.0444C10.5471 20.0444 10.6884 19.9859 10.7926 19.8817C10.8968 19.7775 10.9553 19.6362 10.9553 19.4889V17.6C10.9553 17.4526 10.8968 17.3113 10.7926 17.2072C10.6884 17.103 10.5471 17.0444 10.3998 17.0444V17.0444Z"
            fill="#fff"
          />
          <path
            d="M5.0221 5.96113C5.1254 6.05504 5.26027 6.1066 5.39987 6.10558C5.47299 6.106 5.54547 6.09198 5.61316 6.06434C5.68084 6.03669 5.74241 5.99595 5.79432 5.94447C5.84639 5.89282 5.88772 5.83137 5.91592 5.76367C5.94413 5.69597 5.95865 5.62336 5.95865 5.55002C5.95865 5.47668 5.94413 5.40407 5.91592 5.33637C5.88772 5.26867 5.84639 5.20722 5.79432 5.15558L4.4721 3.83891C4.36582 3.74789 4.22911 3.70034 4.08929 3.70574C3.94947 3.71114 3.81684 3.7691 3.71789 3.86804C3.61895 3.96698 3.56099 4.09962 3.55559 4.23944C3.55019 4.37926 3.59775 4.51596 3.68876 4.62224L5.0221 5.96113Z"
            fill="#fff"
          />
          <path
            d="M15.7777 15.139C15.7259 15.0872 15.6644 15.0461 15.5967 15.018C15.5291 14.99 15.4565 14.9756 15.3833 14.9756C15.31 14.9756 15.2375 14.99 15.1698 15.018C15.1021 15.0461 15.0406 15.0872 14.9888 15.139C14.937 15.1908 14.8959 15.2523 14.8679 15.3199C14.8399 15.3876 14.8254 15.4602 14.8254 15.5334C14.8254 15.6067 14.8399 15.6792 14.8679 15.7469C14.8959 15.8146 14.937 15.8761 14.9888 15.9279L16.3277 17.2612C16.3792 17.3137 16.4405 17.3554 16.5082 17.3841C16.5759 17.4127 16.6487 17.4276 16.7222 17.4279C16.8687 17.4258 17.0085 17.3659 17.111 17.2612C17.2145 17.1571 17.2726 17.0163 17.2726 16.8695C17.2726 16.7228 17.2145 16.582 17.111 16.4779L15.7777 15.139Z"
            fill="#fff"
          />
          <path
            d="M3.90552 10.5499C3.90552 10.4026 3.84699 10.2613 3.7428 10.1571C3.63861 10.0529 3.4973 9.99438 3.34996 9.99438H1.46107C1.31373 9.99438 1.17242 10.0529 1.06824 10.1571C0.964049 10.2613 0.905518 10.4026 0.905518 10.5499C0.905518 10.6973 0.964049 10.8386 1.06824 10.9428C1.17242 11.047 1.31373 11.1055 1.46107 11.1055H3.34996C3.4973 11.1055 3.63861 11.047 3.7428 10.9428C3.84699 10.8386 3.90552 10.6973 3.90552 10.5499Z"
            fill="#fff"
          />
          <path
            d="M19.3387 9.99438H17.4498C17.3025 9.99438 17.1612 10.0529 17.057 10.1571C16.9528 10.2613 16.8943 10.4026 16.8943 10.5499C16.8943 10.6973 16.9528 10.8386 17.057 10.9428C17.1612 11.047 17.3025 11.1055 17.4498 11.1055H19.3387C19.4861 11.1055 19.6274 11.047 19.7316 10.9428C19.8358 10.8386 19.8943 10.6973 19.8943 10.5499C19.8943 10.4026 19.8358 10.2613 19.7316 10.1571C19.6274 10.0529 19.4861 9.99438 19.3387 9.99438Z"
            fill="#fff"
          />
          <path
            d="M5.02208 15.139L3.68875 16.4779C3.61074 16.5552 3.55742 16.654 3.53554 16.7617C3.51366 16.8693 3.5242 16.9811 3.56582 17.0828C3.60745 17.1845 3.67829 17.2715 3.76939 17.3329C3.8605 17.3944 3.96777 17.4274 4.07764 17.4279C4.15114 17.4276 4.22386 17.4127 4.29157 17.3841C4.35927 17.3554 4.42063 17.3137 4.47208 17.2612L5.81097 15.9279C5.91559 15.8232 5.97436 15.6814 5.97436 15.5334C5.97436 15.3855 5.91559 15.2436 5.81097 15.139C5.70636 15.0344 5.56447 14.9756 5.41653 14.9756C5.26858 14.9756 5.1267 15.0344 5.02208 15.139V15.139Z"
            fill="#fff"
          />
          <path
            d="M15.3998 6.10553C15.473 6.10595 15.5454 6.09194 15.6131 6.06429C15.6808 6.03664 15.7424 5.99591 15.7943 5.94442L17.1276 4.60553C17.2311 4.50144 17.2892 4.36063 17.2892 4.21386C17.2892 4.06709 17.2311 3.92629 17.1276 3.8222C17.0235 3.71872 16.8827 3.66064 16.736 3.66064C16.5892 3.66064 16.4484 3.71872 16.3443 3.8222L15.0054 5.15553C14.9533 5.20718 14.912 5.26862 14.8838 5.33632C14.8556 5.40402 14.8411 5.47663 14.8411 5.54997C14.8411 5.62331 14.8556 5.69593 14.8838 5.76363C14.912 5.83133 14.9533 5.89277 15.0054 5.94442C15.0573 5.99591 15.1189 6.03664 15.1866 6.06429C15.2542 6.09194 15.3267 6.10595 15.3998 6.10553Z"
            fill="#fff"
          />
          <ellipse cx="10.3999" cy="10.55" rx="5.45455" ry="5.45455" fill="#fff" />
        </g>
        <defs>
          <clipPath id="clip0_58_252">
            <rect width="20" height="20" fill="white" transform="translate(0.399902 0.550049)" />
          </clipPath>
        </defs>
      </svg>
      <svg className="moon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.75 1.25C5.625 1.25 1.875 4.375 1.875 9.375C1.875 14.375 5.625 18.125 10.625 18.125C15.625 18.125 18.75 14.375 18.75 11.25C11.875 15.625 4.375 8.125 8.75 1.25Z"
          fill="#2d2d2d"
        />
      </svg>
    </button>
  );
};
export default Darkmode;
