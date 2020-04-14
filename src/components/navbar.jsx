import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "./images/logo.png";
import "./styles/navbar.css";

const Navbar = (props) => {
  const [burger, setBurger] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const toggleburger = () => {
    setBurger((currentValue) => !currentValue);
    setMobileView((currentValue) => !currentValue);
  };

  const communityBtn = () => {
    window.location.href = "http://www.w3schools.com";
  };

  return (
    <header id="nav1">
      <div id="nav">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={Logo} alt="logo" />
        </Link>
        <div className="full">
          <ul>
            <li>
              {" "}
              <Link
                className="nav-link"
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                FEATURES
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClass="active"
                to="benefits"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                BENEFITS
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClass="active"
                to="reseller"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                RESELLER PROGRAM
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PRICING
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <button onClick={communityBtn} className="last1">
                COMMUNITY MANAGES
              </button>
            </li>
            <li>
              <button onClick={communityBtn} className="last2">
                RESIDENTS
              </button>
            </li>
            <li>
              <button onClick={communityBtn} className="last2">
                GATEHOUSE
              </button>
            </li>
          </ul>
        </div>
        <div className={burger ? "half change" : "half"} onClick={toggleburger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      <div className={mobileView ? "mobile-view display" : "mobile-view"}>
        <ul className="mobile-nav">
          <li>
            <Link
              className="mobile-nav-link"
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleburger}
            >
              FEATURES
            </Link>
          </li>
          <li>
            <Link
              className="mobile-nav-link"
              activeClass="active"
              to="benefits"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleburger}
            >
              BENEFITS
            </Link>
          </li>
          <li>
            <Link
              className="mobile-nav-link"
              activeClass="active"
              to="reseller"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleburger}
            >
              RESELLER PROGRAM
            </Link>
          </li>
          <li>
            <Link
              className="mobile-nav-link"
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleburger}
            >
              PRICING
            </Link>
          </li>
          <li>
            <Link
              className="mobile-nav-link"
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleburger}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <button onClick={communityBtn} className="last1">
              COMMUNITY MANAGES
            </button>
          </li>
          <li>
            <button onClick={communityBtn} className="last2">
              RESIDENTS
            </button>
          </li>
          <li>
            <button onClick={communityBtn} className="last2">
              GATEHOUSE
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

// <Link
//   activeClass="active"
//   to="about"
//   spy={true}
//   smooth={true}
//   offset={-70}
//   duration={500}
//   className="nav-item nav-link"
//   style={{
//     color: "rgba(209, 32, 165, 0.73)",
//     cursor: "pointer",
//   }}
// >
//   About
// </Link>;

export default Navbar;
