import React from "react";
import "./certificates.css";
import IMG1 from "../../assets/coursera1.png";
import IMG2 from "../../assets/coursera2.png";
import IMG3 from "../../assets/coursera3.png";
import IMG4 from "../../assets/coursera4.png";
import IMG5 from "../../assets/coursera5.png";
import IMG6 from "../../assets/coursera6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Python Basics",
    
    github: "https://github.com/JasonLim1009/TinDog-project",
    
  },
  {
    id: 2,
    image: IMG2,
    title: "High Impact Business Writing",
    
    github: "https://github.com/JasonLim1009/movie-app",
    
  },
  {
    id: 3,
    image: IMG3,
    title: "MAchine Learning Basics",
    
    github: "https://github.com/JasonLim1009/NTFs-Optimux",
    
  },
  {
    id: 4,
    image: IMG4,
    title: "Paper Publication",
    
    github: "https://github.com/JasonLim1009/react-add-to-cart",
    
  },
  {
    id: 5,
    image: IMG5,
    title: "Alteryx Designer Core",
    
    github: "https://github.com/JasonLim1009/react-crypto-app",
    
  },
  {
    id: 6,
    image: IMG6,
    title: "Alteryx MAchine Learning",
    
    github: "https://github.com/JasonLim1009/React-Weather-App",
    
  }
];



const certificates = () => {
  return (
    <section id="certificates">
      <h5>My Achivements</h5>
      <h2>certificates</h2>

      <div className="container certificates__container">
        {data.map(({ id, image, title, link, github, demo }) => {
          return (
            <article key={id} className="certificates__item">
              <div className="certificates__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
             
              <br></br>
              <div className="certificates__item-cta">
                <a href={image} className="btn" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
               
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default certificates;
