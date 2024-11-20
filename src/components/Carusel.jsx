import React, { useEffect, useState } from "react";
import slide1 from "../assets/AdobeStock_115930057.jpeg";
import slide2 from "../assets/AdobeStock_511252858.jpeg";
import slide3 from "../assets/AdobeStock_81800486.jpeg";
import "animate.css";

const Carousel = () => {
  return (
    <div className="carousel w-full min-h-[500px] rounded-lg mt-7">
      <div
        id="slide1"
        className="carousel-item relative w-full"
        style={{
          backgroundImage: `linear-gradient(245deg, rgba(0,0,0,0) 0%, rgba(99,99,99,0) 22%, rgba(64,64,64,0.7512254901960784) 56%, rgba(0,0,0,0.9024859943977591) 100%), url(${slide1})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute top-[50%] left-[10%]">
          <h1 className="text-white text-5xl font-bold animate__animated animate__fadeInLeft">
            Learn Hindi
          </h1>
          <p className="text-white animate__animated animate__fadeInDown">
            Expand your vocabulary and communication skills.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full"
        style={{
          backgroundImage: `linear-gradient(245deg, rgba(0,0,0,0) 0%, rgba(99,99,99,0) 22%, rgba(64,64,64,0.7512254901960784) 56%, rgba(0,0,0,0.9024859943977591) 100%), url(${slide2})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute top-[50%] left-[10%]">
          <h1 className="text-white text-5xl font-bold animate__animated animate__fadeInLeft">
            Interactive Quizzes
          </h1>
          <p className="text-white animate__animated animate__fadeInDown">
            Test your knowledge in a fun way.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full"
        style={{
          backgroundImage: `linear-gradient(245deg, rgba(0,0,0,0) 0%, rgba(99,99,99,0) 22%, rgba(64,64,64,0.7512254901960784) 56%, rgba(0,0,0,0.9024859943977591) 100%), url(${slide3})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute top-[50%] left-[10%]">
          <h1 className="text-white text-5xl font-bold animate__animated animate__fadeInLeft">
            Daily Challenges
          </h1>
          <p className="text-white animate__animated animate__fadeInDown">
            Stay motivated with daily word challenges.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
