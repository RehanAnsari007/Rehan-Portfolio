import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import {AiFillLinkedin} from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer_logo">
        Made with &#10084; by Rehan Ansari on October 2023
      </a>
      <ul className="permailinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/RehanAnsari007">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/thatwickedboy/">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/engg-rehan-ansari/">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
