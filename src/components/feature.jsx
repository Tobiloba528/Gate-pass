import React from "react";
import Another from "./images/another.gif";
import "./styles/feature.css";

const Feature = (props) => {
  return (
    <div id="feature">
      <h1>Gatepass and your community</h1>
      <h4>
        Choosing Gatepass as the visitor management solution is one of the best
        things you can do for your community
      </h4>
      <div className="feature-content">
        <div className="ft-img-container">
          <img src={Another} alt="" />
        </div>
        <div className="ft-container">
          <div className="features">
            <h3>Friendly Welcome</h3>
            <p>
              Avoid visitor harassment at the gate. Give your estate a welcoming
              atmosphere right from the first interaction. No dazzle.
            </p>
          </div>
          <div className="features">
            <h3>Emergency</h3>
            <p>
              Setup emergency contacts and instantly alert them, the security
              officials and the community manager whenever you’re in distress.
              With a click on the panic button, SOS alerts to appropriate
              quarters.
            </p>
          </div>
          <div className="features">
            <h3>Manage Estate Wide-notices</h3>
            <p>
              Manage estate-wide notices in a simpler and more efficient manner.
              No more WhatsApp and BBM groups where messages can get lost in the
              conversation or you’re exposure to spam messages.
            </p>
          </div>
          <div className="features">
            <h3>Seamless Entry</h3>
            <p>
              Seamless entry into the communities. No more holdups for the
              guards to call the house owners. Visitor enters code and confirms
              visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
