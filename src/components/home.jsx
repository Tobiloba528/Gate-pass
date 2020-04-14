import React from "react";
import "./styles/home.css";
import Illustration from "./images/illustration.svg";

const Home = (props) => {
  return (
    <div className="home" id="name">
      <div className="container">
        <h1>Keys to your community</h1>
        <p>
          Gatepass is a cloud based solution deployed on mobile that helps
          communities manage their visitors, communications, payments and
          emergencies in a seamless manner.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div className="img-container">
        <img src={Illustration} alt="Illustration" />
      </div>
    </div>
  );
};

export default Home;
