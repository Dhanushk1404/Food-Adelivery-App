import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Order from "./components/Order";
import Footer from "./Footer";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      {/* <Login/> */}
      <Navbar />
      <Home/>
      <Dishes/>
      <About/>
      <Menu/>
      <Order/>
      <Footer/>
    </Router>
  );
}

export default App;
