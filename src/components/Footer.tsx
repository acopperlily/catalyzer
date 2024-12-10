/// <reference types="vite-plugin-svgr/client" />
import socialInfo from '../data/socialInfo.ts';
import Twitter from '../assets/icons/twitter.svg?react';
import Bluesky from '../assets/icons/bluesky.svg?react';
import GitHub from '../assets/icons/github.svg?react';
import LinkedIn from '../assets/icons/linkedin.svg?react';

const Footer = () => {

  // This made red squigglies go away
  const mapIcons: Record<string, React.JSX.Element> = {
    twitter: <Twitter className='footer__icon' />,
    bluesky: <Bluesky className='footer__icon' />,
    github: <GitHub className='footer__icon' />,
    linkedin: <LinkedIn className='footer__icon' />
  };

  return (
    <footer className="footer">
      <span className="footer__daterange">
        &copy; 2024
      </span>

      <span>
        <a 
          href="https://aprilcopley.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link clickable"
        >
          April Copley
        </a>
      </span>

      <div className="footer__links">
        {socialInfo.map((social, i) => (
          <a 
            key={i} 
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {mapIcons[social.icon]}
          </a>
        ))}
      </div>
      
    </footer>
  );
};

export default Footer;
