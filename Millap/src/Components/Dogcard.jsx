import React from "react";
//import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

import img1 from "../assets/Images/dog2.jpg";

const Dogcard = ({ dog, imageUrl }) => {
  //const[color , setColor]
  const { name, age, gender, vaccinated, description } = dog;

  const message = vaccinated
    ? "and i am safe because i am vaccinated"
    : "Sorry i im in waiting list for being vaccinated";

  return (
    <>
      <div className="main-header shadow-lg bg-white w-1/4 rounded-xl">
        <div className="image">
          <img src={imageUrl} alt="Loading..." className="h-[250px] w-full" />
        </div>
        <div className="details  text-center m-2">
          <p className="text-xl text-slate-500 font-bold uppercase text-center mb-3 mt-3">
            Hi I am {name}
          </p>
          <p className=" font-serif text-center ">I am {age} years old</p>
          <p>and I am {gender}</p>
          {message}
          <p>{description}</p>
        </div>
        <div className="buttons flex items-center justify-center gap-10 p-4 mt-0">
          <NavLink
            to="/adoptiondogs/application"
            className="m-8 hover:opacity-30"
          >
            <button className="button-31 mt-10" role="button">
              Adopt
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Dogcard;
