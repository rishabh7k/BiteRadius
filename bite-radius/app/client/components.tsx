"use client";

import PlaceList from "../places/page";
import React from "react";

const ClickButton = () => {
  return (
    <div className="font-serif text-orange-500 ml-40">
      <br />
      <button
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log(`Latitude: ${latitude}`);
                console.log(`Longitude: ${longitude}`);
              },
              function (error) {
                console.error("Error getting location:", error.message);
              }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
          }
        }}
      >
        {" "}
        Click to explore
      </button>
    </div>
  );
};

export default ClickButton;
