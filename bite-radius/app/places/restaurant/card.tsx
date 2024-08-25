import React from "react";
import { Place } from "../../models/models";
import IsOpen from "./cardComponents/isOpen";
import Address from "./cardComponents/address";
import Rating from "./cardComponents/rating";
import Contact from "./cardComponents/contact";
import NavigateMap from "./cardComponents/navigateMap";

interface PlaceCardProps {
  place: Place;
  onClick: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, onClick }) => {
  return (
    <div
      className="rounded-lg p-4 shadow-lg hover:scale-105 hover:shadow-orange-400 transition-transform cursor-pointer"
      onClick={onClick}
    >
      <div className="text-xl font-semibold text-gray-700 mb-2 flex items-center justify-between p-1">
        <p>{place.displayName.text}</p>
        <IsOpen isOpen={place.regularOpeningHours?.openNow || undefined} />
      </div>
      <Address address={place.formattedAddress} />
      <div className="flex space-x-2">
        <Rating rating={place.rating} />
        <Contact contact={place.internationalPhoneNumber} />
        <NavigateMap mapsUri={place.googleMapsUri} />
      </div>
    </div>
  );
};

export default PlaceCard;
