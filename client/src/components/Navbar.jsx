import { useState } from "react";
import { FaUtensils, FaBars, FaSearch, FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-10">
      <a href="#" className="logo flex items-center text-xl font-bold text-green-600">
        <FaUtensils className="mr-2 text-green-600 text-2xl" /> Food Express
      </a>

      <nav className={`navbar ${menuOpen ? "block" : "hidden"} md:flex gap-6 text-green-600 font-semibold`}>
        <a className="active text-green-800 hover:underline" href="#home">Home</a>
        <a href="#dishes" className="hover:text-green-800 hover:underline">Dishes</a>
        <a href="#about" className="hover:text-green-800 hover:underline">About</a>
        <a href="#menu" className="hover:text-green-800 hover:underline">Menu</a>
        <a href="#order" className="hover:text-green-800 hover:underline">Order</a>
      </nav>

      <div className="icons flex gap-4 items-center text-green-600 text-2xl">
        <FaBars className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        <FaSearch className="cursor-pointer" onClick={() => setSearchOpen(!searchOpen)} />
        <a href="#"><FaHeart className="hover:text-green-800 hover:underline" /></a>
        <a href="#"><FaShoppingCart className="hover:text-green-800 hover:underline" /></a>
      </div>

      {searchOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-md flex items-center rounded-lg">
          <input
            type="search"
            placeholder="search here..."
            className="border p-2 outline-none rounded-md w-64"
          />
          <FaSearch className="ml-2 text-green-600" />
          <FaTimes className="ml-4 cursor-pointer text-green-600" onClick={() => setSearchOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
