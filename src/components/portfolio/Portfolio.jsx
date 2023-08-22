import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Resume-Builder.jpeg";
import IMG2 from "../../assets/me1.png";
import IMG3 from "../../assets/Portfolio.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Get Hired (Resume Builder)",
    link: "Get hired is a Resume Builder application which developed the resume of the user from taking some information and can submit them directly to the desired company",
    github: "https://github.com/RehanAnsari007/Resume_Builder.git",
    demo: "/"
  },
  {
    id: 2,
    image: IMG2,
    title: "3D Solar System using Three JS",
    link: "How To Make An Object Rotate Around Another Object In Three.js",
    github: "https://github.com/RehanAnsari007/SolarSystem.git",
    demo: "https://solar-system-loading-page.onrender.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio Project",
    link: "This is a Portfolio Project developed in REACT",
    github: "https://github.com/RehanAnsari007/Rehan-Portfolio.git",
    demo: "/"
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, link, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <h5>
                
                  {link}
                
              </h5>
              <br></br>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
