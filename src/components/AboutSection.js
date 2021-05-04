import React from "react";
import home1 from "../img/home1.png";
//Styles
import styled from "styled-components";
import { Description, About, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>{" "}
            {/*seperated each word to animate them seperately */}
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Contact us for any type of websites you want to build.</p>
        <button>Contact Me!</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with camera" />
      </Image>
    </About>
  );
};

//Styled components

export default AboutSection;
