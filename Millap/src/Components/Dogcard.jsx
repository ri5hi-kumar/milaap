import React from "react";
//import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";

const Dogcard = ({ dog }) => {
  //const[color , setColor]
  const { image, age, status, size } = dog;

  return (
    <>
      <div className="main-header shadow-lg bg-white w-1/4">
        <div className="image">
          <img src={image} alt="Loading..." />
        </div>
        <div className="details text-left m-2">
          <p className="text-xl text-green-500 font-bold uppercase">Name</p>
          <p className="uppercase font-serif ">{age}</p>
          <p>Health Status : {status}</p>
          <p>Size : {size}</p>
        </div>
        <div className="buttons flex items-center justify-center gap-10 p-4">
          <NavLink
            to="/adoptiondogs/application"
            className="m-8 hover:opacity-30"
          >
           <Button/>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Dogcard;
