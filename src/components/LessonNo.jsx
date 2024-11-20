import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LessonNo = ({ lesson }) => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetch("/lessons.json")
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, []);

  // console.log(lessons);

  return (
    <div>
      {lessons.map((l) => (
        <Link to={`/startlearning/${l.id}`} className="cursor-pointer">
          <div className="bg-gray-100 p-8 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">Lesson</h3>
            <p className="text-xl text-gray-600"></p>
            <p className="text-gray-500 font-bold text-2xl">{lesson}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LessonNo;
