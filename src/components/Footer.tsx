import socialInfo from '../data/socialInfo.ts';

const Footer = () => {
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
          <a key={i} href={social.link}>{social.icon}</a>
        ))}
      </div>
      
    </footer>
  );
};

export default Footer;
