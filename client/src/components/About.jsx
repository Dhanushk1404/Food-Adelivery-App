import React from "react";
import { FaShippingFast, FaDollarSign, FaHeadset } from "react-icons/fa";
import aboutImage from "../assets/food-10.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gray-100" id="about">
      <div className="text-center mb-12">
        <h3 className="text-4xl text-green-500 uppercase">About Us</h3>
        <h1 className="text-4xl md:text-5xl font-bold">Why Choose Us?</h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        <div className="w-full md:w-1/2">
          <img
            src={aboutImage}
            alt="Special Dish"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">Best Food in the Country</h3>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, id. Quam,
            quibusdam odit dignissimos hic itaque fugit assumenda voluptatum excepturi facilis vel,
            voluptas dolorem quos tenetur distinctio pariatur rem harum!
          </p>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit odit
            corrupti veritatis, dolorem a minus fugiat perferendis ipsum autem?
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md w-48">
              <FaShippingFast className="text-green-600 text-3xl" />
              <span className="text-lg font-semibold text-gray-700">Free Delivery</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md w-48">
              <FaDollarSign className="text-green-600 text-3xl" />
              <span className="text-lg font-semibold text-gray-700">Easy Payments</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md w-48">
              <FaHeadset className="text-green-600 text-3xl" />
              <span className="text-lg font-semibold text-gray-700">24/7 Service</span>
            </div>
          </div>
          <a
            href="#"
            className="inline-block px-8 py-3 text-lg font-semibold bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
