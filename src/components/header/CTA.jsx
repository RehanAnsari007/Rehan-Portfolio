import React from "react";
import CV from "../../assets/cv.pdf";
import { FiDownload } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV <FiDownload />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk <AiOutlinePhone />

      </a>
    </div>
  );
};

export default CTA;
