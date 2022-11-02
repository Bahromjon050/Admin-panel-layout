import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import Registerations from "../../pages/Registerations";
import Users from "../../pages/Users";
import Config from "../../redux/config/Config";

const Navbar = () => {
  return (
    <>
      <Router>
        <Config />
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/register" element={<Registerations />} />
          <Route path="/user" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
