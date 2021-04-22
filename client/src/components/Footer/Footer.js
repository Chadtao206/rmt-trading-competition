import {
  FaMediumM,
  FaRedditAlien,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-row">
      <a
        href="https://www.reddit.com/r/sureremit/"
        rel="noreferrer"
        target="_blank"
      >
        <button className="btn btn-primary link-btn">
          <FaRedditAlien fontSize="20" />
        </button>
      </a>
      <a href="https://t.me/sureremit" rel="noreferrer" target="_blank">
        <button className="btn btn-primary link-btn">
          <FaTelegramPlane fontSize="20" />
        </button>
      </a>
      <a
        href="https://www.instagram.com/sureremit/"
        rel="noreferrer"
        target="_blank"
      >
        <button className="btn btn-primary link-btn">
          <FaInstagram fontSize="20" />
        </button>
      </a>
      <a href="https://medium.com/sureremit" rel="noreferrer" target="_blank">
        <button className="btn btn-primary link-btn">
          <FaMediumM fontSize="20" />
        </button>
      </a>
    </div>
  );
}

export default Footer;
