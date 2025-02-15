import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Locations */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Locations</h3>
          <ul className="space-y-2">
            {["India", "Japan", "Russia", "USA", "France"].map((location) => (
              <li key={location}>
                <a href="#" className="hover:text-green-400 transition">
                  {location}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Dishes", "About", "Menu", "Order"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-green-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>📞 +123-456-7890</li>
            <li>📞 +111-222-3333</li>
            <li>📧 <a href="mailto:dineshkarthikrajand.22cse@kongu.edu" className="hover:text-green-400 transition">dhanushk.22cse@kongu.edu</a></li>
            <li>📧 <a href="mailto:dineshkarthikrajand@gmail.com" className="hover:text-green-400 transition">dhanushkanagaraj@gmail.com</a></li>
            <li>📍 Namakkal, Tamil Nadu - 638182</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((platform) => (
              <li key={platform}>
                <a href="#" className="hover:text-green-400 transition">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-400">
        © 2025 by <span className="text-green-400 font-semibold">Dhanush</span>
      </div>
    </footer>
  );
};

export default Footer;
