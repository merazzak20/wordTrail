import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Tutorials = () => {
  const tutorial = useLoaderData();
  console.log(tutorial);
  return (
    <div>
      <section id="inspiration" className="py-16">
        <div className="w-10/12 mx-auto">
          {/* Section Info */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tutorials</h2>
          </div>

          {/* Inspiration Video */}

          <div className="grid grid-cols-3 md:grid-cols-2 gap-5">
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
            to="/tutorials"
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
