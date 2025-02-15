import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUtensils, FaBars, FaSignOutAlt } from "react-icons/fa";

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
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-10">
      <Link to="/home" className="logo flex items-center text-xl font-bold text-green-600">
        <FaUtensils className="mr-2 text-green-600 text-2xl" /> Food Express
      </Link>

      {/* Navigation Links */}
      <nav className={`navbar ${menuOpen ? "block" : "hidden"} md:flex gap-4 text-green-600 font-semibold`}>
        <Link to="/home" className="hover:bg-green-500 hover:text-white px-4 py-2 rounded-md transition">
          Home
        </Link>
        <Link to="/about" className="hover:bg-green-500 hover:text-white px-4 py-2 rounded-md transition">
          About
        </Link>
        <Link to="/dishes" className="hover:bg-green-500 hover:text-white px-4 py-2 rounded-md transition">
          Dishes
        </Link>
        <Link to="/menu" className="hover:bg-green-500 hover:text-white px-4 py-2 rounded-md transition">
          Menu
        </Link>
        <Link to="/order" className="hover:bg-green-500 hover:text-white px-4 py-2 rounded-md transition">
          Order
        </Link>
      </nav>

      {/* Icons + Logout Button */}
      <div className="flex gap-4 items-center text-green-600 text-2xl">
        <FaBars className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />

        {/* Updated Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
        >
          <FaSignOutAlt className="text-lg" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
