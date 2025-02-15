import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUtensils, FaBars, FaSearch, FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-10">
      <Link to="/home" className="logo flex items-center text-xl font-bold text-green-600">
        <FaUtensils className="mr-2 text-green-600 text-2xl" /> Food Express
      </Link>

      <nav className={`navbar ${menuOpen ? "block" : "hidden"} md:flex gap-6 text-green-600 font-semibold`}>
        <Link to="/home" className="hover:text-green-800">Home</Link>
        <Link to="/about" className="hover:text-green-800">About</Link>
        <Link to="/dishes" className="hover:text-green-800">Dishes</Link>
        <Link to="/menu" className="hover:text-green-800">Menu</Link>
        <Link to="/order" className="hover:text-green-800">Order</Link>
      </nav>

      <div className="icons flex gap-4 items-center text-green-600 text-2xl">
        <FaBars className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        <button onClick={handleLogout} className="px-4 py-2 bg-green-500 text-white rounded-md">Logout</button>
      </div>
    </header>
  );
};

export default Navbar;
