import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dummy authentication check
    if (formData.email === "test@example.com" && formData.password === "password") {
      alert("Login Successful!");
      navigate("/home"); // Navigate to Home Page
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register & Forgot Password Links */}
        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-green-500 hover:underline">
              Register
            </a>
          </p>
          <p className="text-gray-600">
            <a href="#" className="text-green-500 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
