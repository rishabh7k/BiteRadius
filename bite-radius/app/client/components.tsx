"use client";
import React from "react";

const ClickButton = () => {
  return (
    <div className="font-serif text-orange-500 ml-40">
      <br />
      <button onClick={() => console.log("Yo Bro")}> Click to explore</button>
    </div>
  );
};

export default ClickButton;
