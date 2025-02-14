import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-green-600 text-xl font-bold">FoodieExpress</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="text-green-600 hover:text-green-800">Menu</Link>
          </li>
          <li>
            <Link to="/about" className="text-green-600 hover:text-green-800">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-green-600 hover:text-green-800">Contact</Link>
          </li>
        </ul>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Order Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
