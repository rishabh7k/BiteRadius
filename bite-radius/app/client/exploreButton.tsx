"use client";
import React from "react";

const ExploreButton = () => {
  return (
    <button
      onClick={() => console.log("Explore Kar")}
      className="bg-orange-600 text-sm font-light w-28 rounded-lg text-white p-1 mb-3"
    >
      Explore
    </button>
  );
};

export default ExploreButton;
