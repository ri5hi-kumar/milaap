import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="main-header w-full bg-black px-5 text-white">
        <div className="header-content flex item-center justify-between h-16 mx-5 my-0 ">
          <div className="left-part flex items-center justify-center">
            <h1 className="font-serif text-2xl hover:cursor-pointer">Milaap</h1>
          </div>
          <ul className="center-part flex items-center justify-center  font-semibold hover:cursor-pointer ">
            <NavLink to="/" className="m-8 hover:opacity-30">
              Home
            </NavLink>
            <NavLink to="/about" className="m-8 hover:opacity-30">
              About
            </NavLink>
            <NavLink to="/adoptiondogs" className="m-8 hover:opacity-30">
              Animals for adoption
            </NavLink>

            {/* <NavLink  className="m-8 hover:opacity-30">Donate</NavLink > */}
            <NavLink to="/lostandfound" className="m-8 hover:opacity-30">
              Report them
            </NavLink>
           
              Adopted Animals
            
            <NavLink to="/contact" className="m-8 hover:opacity-30">
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
