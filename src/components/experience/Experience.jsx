import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Internship</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Company Name</h4>
                <small className="text-light">Yash Networks</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Job Role</h4>
                <small className="text-light">Junior Network Engineer</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Start Date</h4>
                <small className="text-light">15 April 2019</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>End Date</h4>
                <small className="text-light">15 June 2019</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>What I learned</h4>
                <small className="text-light">Workings of wifi network</small><br/>
                <small className="text-light">Management of connected nodes in the network</small><br/>
                <small className="text-light">Experiencedwhat are the different encryption technalogies used in wireless lan networks</small><br/>
                
              </div>
            </article>
           
          </div>
        </div>
        <div className="experience__backend">
          <h3>Internship</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Company Name</h4>
                <small className="text-light">(O)1 Coding Club</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Trained in</h4>
                <small className="text-light">Django python</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Start-Date</h4>
                <small className="text-light">19 july 2023</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>End-Date</h4>
                <small className="text-light">19 september 2023</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>What i Learned</h4>
                <small className="text-light">Basics Of Python</small><br/>
                <small className="text-light">Django python</small><br/>
                <small className="text-light">BUilding a Hands-on URL shortner Project</small><br/>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
