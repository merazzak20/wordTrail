import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [tes, setTes] = useState([]);
  useEffect(() => {
    fetch("/feedback.json")
      .then((res) => res.json())
      .then((data) => setTes(data));
  }, []);
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-8">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <Slider {...settings}>
          {tes.map((t, idx) => (
            <div
              className="w-5/12 mx-auto text-center bg-white rounded-md shadow-lg py-5 px-10 space-x-4"
              key={idx}
            >
              <img
                className=" mx-auto border-gray-800 rounded-full border-2"
                src={t.photo}
                alt=""
              />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p>{t.feedback}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
