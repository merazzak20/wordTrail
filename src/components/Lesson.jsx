import React from "react";
import { useLoaderData } from "react-router-dom";

const Lesson = () => {
  const word = useLoaderData();
  console.log(word);
  return (
    <div>
      <div className="container mx-auto px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 my-5">
          Learn Lessons
        </h2>
        <p className="font-semibold my-4">
          Number of vocabularies in this lesson: {}
        </p>
      </div>
    </div>
  );
};

export default Lesson;
