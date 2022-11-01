import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "../Registration";

const Navbar = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
