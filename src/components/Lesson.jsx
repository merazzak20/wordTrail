import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Modal from "./Modal";
import { Helmet } from "react-helmet";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const Lesson = () => {
  const word = useLoaderData();
  const { lesson_no } = useParams();
  const [selectedData, setSelectedData] = useState(null);
  // console.log(selectedData);
  const filteredData = word.filter(
    (item) => item.lesson_no === parseInt(lesson_no)
  );

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "hi-IN"; // Japanese
    window.speechSynthesis.speak(utterance);
  };

  // console.log(lesson_no);
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-6">
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
                <div className="">
                  <p>
                    Pronunciation:{" "}
                    <span className="text-xl font-medium text-gray-500">
                      {data.pronunciation}
                    </span>
                  </p>
                  <div>
                    <HiMiniSpeakerWave
                      className="text-2xl mx-auto cursor-pointer"
                      onClick={() => pronounceWord(data.word)}
                    />
                  </div>
                </div>
                <p> Part of speech: {data.part_of_speech}</p>

                <button
                  onClick={() => {
                    setSelectedData(data);
                    document.getElementById("my_modal_1").showModal();
                  }}
                  className="btn bg-gray-500 text-white rounded-none my-5"
                >
                  When to Say
                </button>
              </div>
              {/* <Modal selectedData={selectedData}></Modal> */}

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-4xl mb-3">
                    {selectedData?.word}
                  </h3>
                  <small className="">
                    When to say:{" "}
                    <span className="text-base font-medium">
                      {selectedData?.when_to_say}
                    </span>
                  </small>
                  <br />
                  <small className="">
                    Example:{" "}
                    <span className="text-base font-medium">
                      {selectedData?.example}
                    </span>
                  </small>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
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
