import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const Tutorials = () => {
  const tutorial = useLoaderData();
  // console.log(tutorial);
  return (
    <div>
      <Helmet>
        <title>Tutorial - WordTrail</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <section id="inspiration" className="py-16">
        <div className="w-10/12 mx-auto">
          {/* Section Info */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tutorials</h2>
          </div>

          {/* Inspiration Video */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tutorial.map((t, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-lg ">
                <iframe
                  width="100%"
                  height="300px"
                  src={t.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg overflow-hidden"
                ></iframe>
              </div>
            ))}
          </div>

          <Link
            to="/startlearning"
            className="btn btn-neutral rounded-none my-5 mt-16"
          >
            Learn Vocabularies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
