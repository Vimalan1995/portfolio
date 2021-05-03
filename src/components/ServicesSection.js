import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import Diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            High <span>quality</span> services.
          </h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="icon" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={Diaphragm} alt="icon" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={money} alt="icon" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} alt="icon" />
                <h3>TeamWork</h3>
              </div>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>
      </div>
      <img src={home2} alt="icon" />
    </div>
  );
};

export default ServicesSection;
