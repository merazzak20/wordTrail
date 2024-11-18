import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const [word, setWord] = useState([]);
  useEffect(() => {
    fetch("/word.json")
      .then((res) => res.json())
      .then((data) => setWord(data));
  }, []);
  // console.log(word[1].lesson_no);

  const mx = [];
  {
    word.map((w) => {
      mx.push(w.lesson_no);
    });
  }
  const lessonNumber = Math.max(...mx);
  // console.log(lessonNumber);

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Success So Far
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* User Count */}
          <div className="bg-gray-100 p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Users</h3>
            <p className="text-xl text-gray-600">
              <CountUp
                className="font-semibold"
                start={0}
                end={1800}
                duration={3.5}
                separator=","
              />
            </p>
            <p className="text-gray-500">Active Users</p>
          </div>

          {/* Lesson Count */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Lessons</h3>
            <p className="text-xl text-gray-600">
              <CountUp
                className="font-semibold"
                start={0}
                end={lessonNumber}
                duration={3.5}
                separator=","
              />
            </p>
            <p className="text-gray-500">Available Lessons</p>
          </div>

          {/* Vocabulary Count */}
          <div className="bg-gray-100 p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Vocabulary</h3>
            <p className="text-xl text-gray-600">
              <CountUp
                className="font-semibold"
                start={0}
                end={word.length}
                duration={3.5}
                separator=","
              />
            </p>
            <p className="text-gray-500">Words in the Library</p>
          </div>

          {/* Tutorial Count */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Tutorials</h3>
            <p className="text-xl text-gray-600">
              <CountUp
                className="font-semibold"
                start={0}
                end={250}
                duration={3.5}
                separator=","
              />
            </p>
            <p className="text-gray-500">Interactive Tutorials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
