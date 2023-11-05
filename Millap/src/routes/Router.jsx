import React from "react";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Doglist from "../Components/Doglist";
import Appli from "../Pages/Appli";
import Found from "../Pages/Found";
import About from "../Pages/About";
import { Routes, Route } from "react-router-dom";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adoptiondogs" element={<Doglist />} />
        <Route path="/lostandfound" element={<Found />} />
        <Route path="/adoptiondogs/application" element={<Appli />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Router;
