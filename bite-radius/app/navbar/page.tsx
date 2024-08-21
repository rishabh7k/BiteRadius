import React from "react";
// var style = "w-auto p-4 hover:bg-sky-200 rounded-full border border-green-700";
const Navbar = () => {
  return (
    <div className="flex font-bold p-2 h-24">
      {/* <div className={`${style}`}>logo</div> */}
      <div className="w-auto ml-64 flex items-center">
        <h1 className="text-black text-3xl">Bite</h1>
        <h1 className="text-orange-600 text-3xl">Radius.</h1>
      </div>
      <div className="w-auto ml-auto mr-64 flex items-center space-x-14">
        <p className="text-sm">Home</p>
        <p className="text-sm">About Us</p>
        <p className="text-sm">Contact Us</p>
      </div>
    </div>
  );
};

export default Navbar;
