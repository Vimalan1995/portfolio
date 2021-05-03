import React from "react";
//page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
//if you dont want to use div use <> instead
const AboutUs = () => {
  return (
    <>
      <AboutSection />
      <ServicesSection />;
    </>
  );
};

export default AboutUs;
