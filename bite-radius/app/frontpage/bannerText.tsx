import React from "react";
import ExploreButton from "../client/exploreButton";
const BannerText = () => {
  return (
    <div className="w-96 text-5xl font-bold h-56 mt-36">
      Your Favourite <span className="text-orange-600">Food</span> Just Round
      The Corner
      <div>
        <ExploreButton />
        <p className="text-sm text-gray-400 font-light p-1">
          Explore amazing Restaurants in half a kilometre radius around you
        </p>
      </div>
    </div>
  );
};

export default BannerText;
