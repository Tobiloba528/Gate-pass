import React from "react";
import Pic from "./images/reseller.svg";
import "./styles/reseller.css";

const Reseller = (props) => {
  return (
    <div className="reseller" id="reseller">
      <div className="reseller-container">
        <div className="rs-img-container">
          <img src={Pic} alt="Reseller" />
        </div>
        <div className="reseller-content">
          <h3>Help us improve your community experience.</h3>
          <p>
            Be part of the Gatepass success story. As a reseller you directly
            benefit from the signup fees you have successfully referred.
          </p>
          <button>REFER SOMEONE</button>
        </div>
      </div>
    </div>
  );
};

export default Reseller;
