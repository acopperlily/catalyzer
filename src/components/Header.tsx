/// <reference types="vite-plugin-svgr/client" />
import Info from "../assets/icons/info-circle.svg?react"; 
import type { HeaderProps } from "../data/types";

const Header = ({ isInert, handleClick }: HeaderProps) => {
  return (
    <header className="header" inert={isInert}>
      <div className="header__container">
        <h1 className="header__title">Catalyzer</h1>
        <button
          type="button"
          className="header__icon-container clickable"
          aria-label="Open information dialog"
          onClick={handleClick}
        >
          <Info 
            className="header__icon"
            aria-hidden="true"
            focusable="false"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
