import React from "react";
import Ves from "./images/Ves.png";
import "./styles/footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer1">
        <a href="">FAQs</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms and Conditions</a>
      </div>
      <div className="footer2">
        <a href="">
          <img src={Ves} alt="" />
        </a>
        <div className="reserve">
          <p> &copy; 2018 Gatepass. All Rights Reserved</p>
          <p>
            {" "}
            Powered By{" "}
            <span>
              <a href="">3WP</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
