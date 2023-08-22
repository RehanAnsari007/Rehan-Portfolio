import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/thatwickedboy/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://github.com/RehanAnsari007" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/engg-rehan-ansari/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
