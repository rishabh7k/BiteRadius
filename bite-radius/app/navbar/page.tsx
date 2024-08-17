import React from "react";
var style = "w-auto p-4 hover:bg-sky-200 rounded-full";
const Navbar = () => {
  return (
    <div className="flex font-bold bg-sky-50 p-2">
      <div className={`${style}`}>logo</div>
      <div className={`${style}`}>name</div>
    </div>
  );
};

export default Navbar;
