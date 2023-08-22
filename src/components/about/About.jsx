import React from "react";
import "./about.css";
import ME from "../../assets/Rehan-1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { GrDocumentPdf } from "react-icons/gr";
import PDF from "../../assets/cv.pdf";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="../../assets/Rehan-1.jpg"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>In Python</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>paper published</h5>
              <small>IEEE Paper published of Final Year engineering project</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          I'm a computer engineer and Python programmer with a passion for data analysis. I'm a hard-working, dedicated student, always looking for ways to make the most of every project I'm involved with. 
I'm experienced in building data models, understanding user requirements, and creating automated solutions. I enjoy the challenge of learning new concepts and technologies and taking on complex projects.
          </p>
          <a href={PDF} className="btn btn-primary">
            Download PDF <GrDocumentPdf />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
