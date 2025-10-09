import React from "react";
import TestimonialCarousel from "../common/TestimonialCarausel";
export default function ClientTestimonials() {
  return (
    <section className="max-w-[1400px] mx-auto bg-white p-12 sm:p-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Testimonials of Our Clients
        </h2>
        <p className="md:w-[70%] mx-auto text-lg text-gray-600 mb-12">
          Hear from our happy clients who have achieved success with the help of our mentors and professionals.
        </p>
      </div>
        <TestimonialCarousel />
        {/* <div className="bg-green-100 h-48 w-[40%] rounded-lg mt-[-10rem] "></div> */}
    </section>
  );
}