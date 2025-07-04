/// <reference types="vite-plugin-svgr/client" />
import Info from '../assets/icons/info-circle.svg?react'; 

type HeaderProps = {
  handleClick: () => void;
};

const Header = ({ handleClick }: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header__title">Catalyzer</h1>
      <div 
        className="header__icon-container clickable"
        onClick={handleClick}
      >
        <Info className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
