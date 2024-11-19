import React from "react";
import { Link } from "react-router-dom";

const LessonNo = ({ lesson }) => {
  return (
    <Link to="/startlearning/lessons" className="cursor-pointer">
      <div className="bg-gray-100 p-8 shadow-md rounded-lg text-center">
        <h3 className="text-xl font-semibold text-gray-800">Lesson</h3>
        <p className="text-xl text-gray-600"></p>
        <p className="text-gray-500 font-bold text-2xl">{lesson}</p>
      </div>
    </Link>
  );
};

export default LessonNo;
