import React from "react";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import food1 from "../assets/food-11.jpg";
import food2 from "../assets/food-12.jpg";
import food3 from "../assets/food-13.jpg";
import food4 from "../assets/food-14.jpg";
import food5 from "../assets/food-15.jpg";
import food6 from "../assets/food-16.jpg";
import food7 from "../assets/food-17.jpg";
import food8 from "../assets/food-18.jpg";
import food9 from "../assets/food-19.jpg";



const menuItems = [
  { id: 1, image: food1, name: "Shawarma", price: 120 },
  { id: 2, image: food2, name: "Chicken Kathi roll", price: 150 },
  { id: 3, image: food3, name: "Chicken 65", price: 100 },
  { id: 4, image: food4, name: "Tandoori", price: 250 },
  { id: 5, image: food5, name: "Rumali rotti", price: 120 },
  { id: 6, image: food6, name: "Mutton Briyani", price: 350 },
  { id: 7, image: food7, name: "Chicken Briyani", price: 120 },
  { id: 8, image: food8, name: "kfc fried Chicken", price: 99 },
  { id: 9, image: food9, name: "Beef sheek", price: 99 },
];

const Menu = () => {
  return (
    <section className="py-12 bg-gray-100" id="menu">
      <div className="text-center mb-8">
        <h3 className="text-lg mt-4 text-green-600 uppercase">Our Menu</h3>
        <h1 className="text-3xl font-bold">Today's Special</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg relative text-center">
            <div className="absolute top-4 right-4">
              <a href="#" className="text-red-500 text-lg"><FaHeart /></a>
            </div>
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <div className="flex justify-center space-x-1 text-yellow-500 my-2">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="block text-lg font-bold text-gray-700">${item.price}</span>
            <a href="#" className="mt-4 inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
