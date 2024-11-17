import React from "react";
import { Carousel } from "daisyui"; // Optional if you want a carousel effect

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <Carousel className="space-y-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
              <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
