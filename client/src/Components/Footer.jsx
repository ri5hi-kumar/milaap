import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold">Animal Adoption & Report</div>
        <div className="social-icons flex space-x-4">
          <a href="#" className="text-white hover:text-gray-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
