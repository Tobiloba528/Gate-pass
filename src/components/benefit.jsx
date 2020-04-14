import React from "react";
import "./styles/benefit.css";
import Security from "./images/security.svg";
import Developer from "./images/developers.svg";
import Manager from "./images/managers.svg";
import Resident from "./images/residents.svg";
import SecurityPDF from "./files/gatepass-security.pdf"

const Benefits = (props) => {
  return (
    <div id="benefits">
      <h1>Why Gatepass</h1>
      <h4>
        Gatepass offers several advantages and its use cuts across different
        sections of the real estate industry.
      </h4>
      <div className="benefit-content one">
        <div className="bt-img-container">
          <img src={Security} alt="Security" />
        </div>
        <div className="bt-container">
          <div className="part2">
            <h3>Security</h3>
            <p>
              Gatepass will revolutionize how you secure your clients and their
              assets.
            </p>
            <a href={SecurityPDF} download>
              Download PDF
            </a>
          </div>
        </div>
      </div>
      <div className="benefit-content">
        <div className="bt-container">
          <div className="part2">
            <h3>Property Developers</h3>
            <p>
              Gatepass fosters a strong sense of belonging in your communities
              and provides insights on how to serve your customers better.
            </p>
            <a href={SecurityPDF} download>
              Download PDF
            </a>
          </div>
        </div>
        <div className="bt-img-container">
          <img src={Developer} alt="Developer" />
        </div>
      </div>

      <div className="benefit-content one">
        <div className="bt-img-container">
          <img src={Manager} alt="Security" />
        </div>
        <div className="bt-container">
          <div className="part2">
            <h3>Property & Facility Managers</h3>
            <p>
              Gatepass allows you manage your portfolio in a transparent manner
              and provides insights to improve the quality of life in the
              community.
            </p>
            <a href={SecurityPDF} download>
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="benefit-content">
        <div className="bt-container">
          <div className="part2">
            <h3>Residents & Estate Associations</h3>
            <p>
              Gatepass enables residents manage their visitors in a friendly,
              secure and seamless manner.
            </p>
            <a href={SecurityPDF} download>
              Download PDF
            </a>
          </div>
        </div>
        <div className="bt-img-container">
          <img src={Resident} alt="Developer" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
