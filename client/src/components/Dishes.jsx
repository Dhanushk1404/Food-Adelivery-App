import React from "react";
import { FaHeart, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import images from the assets folder
import food1 from "../assets/food-4.png";
import food2 from "../assets/food-5.jpg";
import food3 from "../assets/food-6.jpg";
import food4 from "../assets/food-7.jpg";
import food5 from "../assets/food-8.jpg";
import food6 from "../assets/food-9.jpg";

const dishes = [
  { id: 1, image: food1, name: "Panner Tikka", price: 200 },
  { id: 2, image: food2, name: "Fried Chicken", price: 250 },
  { id: 3, image: food3, name: "Fried Rice", price: 150 },
  { id: 4, image: food4, name: "Parrota", price: 200 },
  { id: 5, image: food5, name: "Doas", price: 100 },
  { id: 6, image: food6, name: "", price: 500 },
];

const Dishes = () => {
  return (
    <section className="py-12 bg-gray-100" id="dishes">
      <div className="text-center mt-8 mb-8">
        <h1 className="text-3xl font-bold">Popular Dishes</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white p-4 rounded-lg shadow-lg relative text-center">
            <div className="absolute top-4 right-4 flex space-x-2">
              <a href="#" className="text-red-500 text-lg"><FaHeart /></a>
              <a href="#" className="text-blue-500 text-lg"><FaEye /></a>
            </div>
            <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{dish.name}</h3>
            <div className="flex justify-center space-x-1 text-yellow-500 my-2">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
            <span className="block text-lg font-bold text-gray-700">Rs: {dish.price}</span>
            <a href="#" className="mt-4 inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dishes;
