import React from "react";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import { Routes, Route } from "react-router-dom";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Router;
