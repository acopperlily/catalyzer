/// <reference types="vite-plugin-svgr/client" />
import socialInfo from '../data/socialInfo.ts';
import Twitter from '../assets/icons/twitter.svg?react';
import Bluesky from '../assets/icons/bluesky.svg?react';
import GitHub from '../assets/icons/github.svg?react';
import LinkedIn from '../assets/icons/linkedin.svg?react';

type FooterProps = { isInert: boolean; };

const year: number = new Date().getFullYear();
const className: string = 'footer__icon';

const Footer = ({ isInert }: FooterProps) => {

  // This made red squigglies go away
  const mapIcons: Record<string, React.JSX.Element> = {
    twitter: <Twitter className={className} aria-hidden="true"/>,
    bluesky: <Bluesky className={className} aria-hidden="true"/>,
    github: <GitHub className={className} aria-hidden="true"/>,
    linkedin: <LinkedIn className={className} aria-hidden="true" />
  };

  return (
    <footer className="footer" inert={isInert}>
      <span className="footer__date">
        &copy; {year}
      </span>

      <span>
        <a 
          href="https://aprilcopley.netlify.app"
          aria-label="April Copley's portfolio"
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
            aria-label={`${social.icon} profile`}
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
