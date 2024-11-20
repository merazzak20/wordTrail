import React from "react";
import Carousel from "./Carusel";
import AboutSection from "./AboutSection";
import Counter from "./Counter";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page - WordTrail</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <Carousel></Carousel>
      <AboutSection></AboutSection>
      <Counter></Counter>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
