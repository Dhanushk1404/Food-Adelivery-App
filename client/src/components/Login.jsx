import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/food-20.jpg"; // Ensure the path is correct

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "test@example.com" && formData.password === "password") {
      alert("Login Successful!");

      // ✅ Store authentication state in localStorage
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);

      // ✅ Redirect to home
      navigate("/home");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-[90%] max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Background Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${loginImage})`,
          }}
        ></div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
