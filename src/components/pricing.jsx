import React, { useState } from "react";
import { toast } from "react-toastify";
import "./styles/pricing.css";
import Facebook from "./images/facebook.png";
import Twitter from "./images/twitter.png";
import LinkedIn from "./images/linkedin.png";
import Instagram from "./images/instagram.png";
import Email from "./images/email.png";

const Pricing = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if(!email) return;
    toast.success(`Thank you for subscribing`);
    setEmail("")
  };

  return (
    <div id="pricing">
      <div className="pricing-container">
        <h3>Pricing</h3>
        <p>
          Pricing for gatepass is on a per household basis and discounts are
          available depending on the size of the community,
        </p>
        <div className="princing-input">
          <input
            type="email"
            placeholder="Email Adddress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>GET QUOTE</button>
        </div>
        <p>
          Contact us to learn how Gatepass can help you make your community
          safer and more efficient.
        </p>
        <div className="pricing-links">
          <a href="https://www.w3schools.com">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="https://www.w3schools.com">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="https://www.w3schools.com">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="https://www.w3schools.com">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://www.w3schools.com">
            <img src={Email} alt="email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
