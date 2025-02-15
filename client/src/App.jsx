import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Order from "./components/Order";
import Footer from "./Footer";
import Login from "./components/Login";

function App() {
  // ✅ Check authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // ✅ Store authentication state in localStorage
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        {!isAuthenticated ? (
          <>
            {/* ✅ Show Login page if not authenticated */}
            <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            {/* ✅ Allow access to all pages after login */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;
