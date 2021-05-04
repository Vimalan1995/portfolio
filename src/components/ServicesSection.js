import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import Diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//styles
import { Description, About, Image, Hide } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <div>
      <Services>
        <Description>
          <h2>
            High <span>quality</span> services.
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="icon" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={Diaphragm} alt="icon" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="icon" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="icon" />
                <h3>TeamWork</h3>
              </div>
              <p>Lorem ipsum dolor sit</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="icon" />
        </Image>
      </Services>
    </div>
  );
};
{
  /*Will over ride*/
}
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
