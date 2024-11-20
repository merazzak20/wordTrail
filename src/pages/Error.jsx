import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const Error = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold animate__animated animate__fadeInLeft">
            404
          </h1>
          <p className="py-6">Opps! This page is not found</p>
          <Link to="/" className="btn btn-neutral rounded-none">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
