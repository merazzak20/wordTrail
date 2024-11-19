import React, { useEffect, useState } from "react";
import LessonNo from "../components/LessonNo";
import { Link } from "react-router-dom";

const StartLearning = () => {
  const [word, setWord] = useState([]);
  useEffect(() => {
    fetch("/word.json")
      .then((res) => res.json())
      .then((data) => setWord(data));
  }, []);

  const mx = word.map((w) => w.lesson_no);
  const uniquelesson = [...new Set(mx)];
  // console.log(uniquelesson);
  return (
    <div>
      <div className="container mx-auto px-12 text-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-12 my-5">
            Let's Learn
          </h2>
          <p className="font-semibold my-4">
            Number of Leassons: {uniquelesson.length}
          </p>
        </div>

        <section className="grid grid-cols-3 gap-4">
          {uniquelesson.map((lesson, idx) => (
            <LessonNo key={idx} lesson={lesson}></LessonNo>
          ))}
        </section>

        <section className="py-16">
          <div className="w-10/12 mx-auto">
            {/* Section Info */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Tutorial
              </h2>
            </div>

            {/* Inspiration Video */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/1lrz11BbqCA?si=D1ATLfPLWH0vcPdG"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg overflow-hidden"
              ></iframe>
            </div>
            <Link
              to="/tutorials"
              className="btn btn-neutral rounded-none my-5 mt-16"
            >
              View More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StartLearning;
