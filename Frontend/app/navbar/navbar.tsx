import React from "react";
import { ImageComponents } from "../images/component";
const Navbar = () => {
  return (
    <div className="flex font-bold p-2 h-24 bg-white shadow-sm">
      <a href="/" className="w-auto ml-64 flex items-center">
        <ImageComponents.LogoComponent />
        <h1 className="text-black text-3xl">Bite</h1>
        <h1 className="text-orange-500 text-3xl">Radius.</h1>
      </a>
      <div className="w-auto ml-auto mr-64 flex items-center space-x-14">
        <a href="/">
          <p className="text-sm shadow-sm px-3 py-1 hover:bg-orange-500 transition-colors duration-400 hover:text-white rounded-lg">
            Home
          </p>
        </a>
        <p className="text-sm shadow-sm px-3 py-1 hover:bg-orange-500 transition-colors duration-400 hover:text-white rounded-lg">
          About Us
        </p>
        <a
          href="https://www.linkedin.com/in/rishabh-verma-62385219b/"
          target="_blank"
        >
          <p className="text-sm shadow-sm px-3 py-1 hover:bg-orange-500 transition-colors duration-400 hover:text-white rounded-lg">
            Contact Us
          </p>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
