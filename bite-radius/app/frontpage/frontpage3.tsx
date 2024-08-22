import React from "react";
import { ImageComponents } from "../images/component";
const FrontPage3 = () => {
  return (
    <div className="h-auto ">
      <div className="border border-blue-600 flex">
        {" "}
        <div className="border border-lime-600 w-96 text-5xl font-bold ml-96 mt-28 h-56">
          Your Favourite <span className="text-orange-600">Food</span> Just
          Round The Corner
          <div>
            {" "}
            <button className=" bg-orange-600 text-sm font-light w-28 rounded-lg text-white p-1">
              Explore
            </button>
            <p className="text-sm text-gray-400 font-light p-1">
              Explore amazing Restaurants in half a kilometre radius around you
            </p>
          </div>
        </div>
        <div className="w-72 h-72 mt-28">
          {/* <ImageComponents.FrontImage /> */}
          <img
            src="http://localhost/biryani.jpg"
            alt="description"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="border border-black flex items-center justify-center space-x-64">
        <div className="border border-purple-500 flex">
          <img
            src="http://localhost/food-card1.jpg"
            alt="description"
            className="w-10 h-10 object-cover"
          />
          <span>Yo</span>
        </div>
        <div className="border border-purple-500 flex">
          {" "}
          <img
            src="http://localhost/food-card2.jpg"
            alt="description"
            className="w-10 h-10 object-cover"
          />
          <span>Yo</span>
        </div>
        <div className="border border-purple-500 flex">
          {" "}
          <img
            src="http://localhost/food-card3.jpg"
            alt="description"
            className="w-10 h-10 object-cover"
          />
          <span>Yo</span>
        </div>
      </div>
    </div>
  );
};

export default FrontPage3;
