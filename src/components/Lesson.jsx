import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Modal from "./Modal";
import { Helmet } from "react-helmet";

const Lesson = () => {
  const word = useLoaderData();
  const { lesson_no } = useParams();
  const [selectedData, setSelectedData] = useState(null);
  console.log(selectedData);
  const filteredData = word.filter(
    (item) => item.lesson_no === parseInt(lesson_no)
  );

  console.log(lesson_no);
  return (
    <div>
      <Helmet>
        <title>Lesson - WordTrail</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div className="container mx-auto px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 my-5">
          Learn Lessons
        </h2>
        <p className="font-semibold my-4">Lesson Number {lesson_no}</p>
        <p className="font-semibold my-4">
          Number of vocabularies in this lesson: {filteredData.length}
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 my-6">
          {filteredData.map((data) => (
            <div
              className={`card shadow-lg ${
                data.difficulty === "easy"
                  ? "bg-blue-100"
                  : data.difficulty === "medium"
                  ? "bg-yellow-100"
                  : data.difficulty === "difficult"
                  ? "bg-red-100"
                  : "bg-gray-100"
              }`}
            >
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
                <button
                  onClick={() => {
                    setSelectedData(data);
                    document.getElementById("my_modal_5").showModal();
                  }}
                  className="btn bg-gray-500 text-white rounded-none my-5"
                >
                  When to Say
                </button>
              </div>
              <Modal selectedData={selectedData}></Modal>
            </div>
          ))}
        </div>
        <Link
          to="/startlearning"
          className="btn btn-neutral rounded-none border-none outline-none my-5 mt-16"
        >
          Back to Lesson
        </Link>
      </div>
    </div>
  );
};

export default Lesson;
