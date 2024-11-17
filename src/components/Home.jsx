import React from "react";
import Carousel from "./Carusel";
import AboutSection from "./AboutSection";
import Counter from "./Counter";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <AboutSection></AboutSection>
      <Counter></Counter>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
