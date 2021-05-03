import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2> {/*seperated each word to animate them seperately */}
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>Contact us for any type of websites you want to build.</p>
        <button>Contact Me!</button>
      </div>
      <div className="image">
          <img src={home1} alt="guy with camera"/>
      </div>
    </div>
  );
};

export default AboutSection;
