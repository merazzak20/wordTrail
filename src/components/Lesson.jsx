import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Lesson = () => {
  const word = useLoaderData();
  const { lesson_no } = useParams();
  const filteredData = word.filter(
    (item) => item.lesson_no === parseInt(lesson_no)
  );
  // "id": "word083",
  //   "word": "मजेदार",
  //   "pronunciation": "majedaar",
  //   "meaning": "funny",
  //   "part_of_speech": "adjective",
  //   "difficulty": "easy",
  //   "lesson_no": 3,
  //   "when_to_say": "Used to describe something amusing or entertaining.",
  //   "example": "यह कहानी बहुत मजेदार है। (yeh kahani bahut majedaar hai.) - This story is very funny."
  console.log(filteredData);
  return (
    <div>
      <div className="container mx-auto px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 my-5">
          Learn Lessons
        </h2>
        <p className="font-semibold my-4">
          Number of vocabularies in this lesson: {filteredData.length}
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 my-6">
          {filteredData.map((data) => (
            <div className="card bg-gray-100 shadow-lg">
              <div className="card-body ">
                <h2 className="card-title text-3xl mx-auto">{data.word}</h2>
                <p>
                  Meaning:{" "}
                  <span className="text-xl font-semibold">{data.meaning}</span>
                </p>
                <p>
                  Pronunciation:{" "}
                  <span className="text-xl font-medium text-gray-500">
                    {data.pronunciation}
                  </span>
                </p>
                <p> Part of speech: {data.part_of_speech}</p>
                <button className="btn bg-gray-500 text-white rounded-none my-5">
                  When to Say
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/startlearning"
          className="btn btn-neutral rounded-none my-5 mt-16"
        >
          Back to Lesson
        </Link>
      </div>
    </div>
  );
};

export default Lesson;
