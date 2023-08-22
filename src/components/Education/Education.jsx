import React from "react";
import "./education.css";

import { BsFillMortarboardFill } from "react-icons/bs";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { RiFilePaperFill } from "react-icons/ri";



const Education = () => {
  return (
    <section id="education">
      <h5>What i Studied</h5>
      <h2>My Education</h2>

      <div className="container education__container">
        <div className="education__diploma">
          <h3>Computer Engineering(DIPLOMA)</h3>
          <div className="education__content">
            <article className="education__details">
              <BsFillMortarboardFill className="education__details-icon" />
              <div>
                <h4>Collage Name: </h4>
                <small className="text-light">Vidyalankar Polytechnic</small>
              </div>
            </article>


            <article className="education__details">
              <BsGlobeCentralSouthAsia className="education__details-icon" />
              <div>
                <h4>Address</h4>
                <small className="text-light">Wadala Mumbai</small>
              </div>
            </article>






            <article className="education__details">
              <BsFillCalendar2CheckFill className="education__details-icon" />
              <div>
                <h4>Passout Year</h4>
                <small className="text-light">2020</small>
              </div>
            </article>
            <article className="education__details">
              <RiFilePaperFill className="education__details-icon" />
              <div>
                <h4>Percentage</h4>
                <small className="text-light">88%</small>
              </div>
            </article>
           
          </div>
        </div>
        
        <div className="education__backend">
          <h3>B.E (Computer Engineering)</h3>
          <div className="education__content">
          <article className="education__details">
              <BsFillMortarboardFill className="education__details-icon" />
              <div>
                <h4>Collage Name: </h4>
                <small className="text-light">St.John Collage of engineering and management</small>
              </div>
            </article>


            <article className="education__details">
              <BsGlobeCentralSouthAsia className="education__details-icon" />
              <div>
                <h4>Address</h4>
                <small className="text-light">vivoor Palghar</small>
              </div>
            </article>






            <article className="education__details">
              <BsFillCalendar2CheckFill className="education__details-icon" />
              <div>
                <h4>Passout Year</h4>
                <small className="text-light">2023</small>
              </div>
            </article>
            <article className="education__details">
              <RiFilePaperFill className="education__details-icon" />
              <div>
                <h4>Average CTC</h4>
                <small className="text-light">8.14</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
