/// <reference types="vite-plugin-svgr/client" />
import Info from '../assets/icons/info-circle.svg?react'; 

type HeaderProps = {
  isInert: boolean;
  handleClick: () => void;
};

const Header = ({ isInert, handleClick }: HeaderProps) => {
  return (
    <header className="header" inert={isInert}>
      <div className="header__container">
        <h1 className="header__title">Catalyzer</h1>
        <div
          className="header__icon-container clickable"
          onClick={handleClick}
        >
          <Info className="header__icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
