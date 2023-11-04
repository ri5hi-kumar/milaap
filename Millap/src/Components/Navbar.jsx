import React from "react";

function Navbar() {
  return (
    <>
      <div className="main-header w-full bg-black px-5 text-white">
        <div className="header-content flex item-center justify-between h-16 mx-5 my-0 ">
          <div className="left-part flex items-center justify-center">
            <h1 className="font-serif text-2xl hover:cursor-pointer">Millap</h1>
          </div>
          <ul className="center-part flex items-center justify-center  font-semibold hover:cursor-pointer ">
            <li className="m-8 hover:opacity-30">Home</li>
            <li className="m-8 hover:opacity-30">About</li>
            <li className="m-8 hover:opacity-30">Dogs for adoption</li>
            <li className="m-8 hover:opacity-30">Donate</li>
            <li className="m-8 hover:opacity-30">Volunteer</li>
            <li className="m-8 hover:opacity-30">Adopted Dogs</li>
            <li className="m-8 hover:opacity-30">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
