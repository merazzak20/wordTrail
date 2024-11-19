import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-12 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-12">About Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto  p-8  rounded-lg mb-10 text-justify">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                Our mission is to make learning new languages fun and accessible
                to everyone. We aim to help users expand their vocabulary and
                improve their communication skills by offering interactive
                lessons, engaging exercises, and easy-to-follow methods.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Whether you're learning for travel, work, or personal growth,
                our platform provides the tools you need to succeed. With our
                carefully curated vocabulary lists, you can master words and
                phrases in no time.
              </p>

              <Link className="btn btn-neutral rounded-none mt-4" to="/about">
                Read More
              </Link>
            </div>

            {/* How Users Learn Vocabulary */}
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                How You Can Learn Vocabulary
              </h3>
              <p className="text-lg text-gray-700">
                Learning vocabulary is easier than ever! Our platform allows you
                to:
              </p>
              <ul className=" list-inside text-lg text-gray-700 mt-4">
                <li>
                  <strong>Interactive Lessons:</strong> Learn words through
                  engaging lessons and exercises that cater to different
                  learning styles.
                </li>
                <li>
                  <strong>Practice Quizzes:</strong> Test your knowledge with
                  quizzes that help reinforce your vocabulary skills.
                </li>
                <li>
                  <strong>Audio Pronunciation:</strong> Listen to the correct
                  pronunciation of words by native speakers to improve your
                  speaking skills.
                </li>
                <li>
                  <strong>Real-life Examples:</strong> Each word comes with
                  practical examples to help you understand its usage in
                  everyday conversations.
                </li>
              </ul>
              <p className="text-lg text-gray-700 mt-4">
                Start learning today and take the first step towards mastering a
                new language with confidence!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
