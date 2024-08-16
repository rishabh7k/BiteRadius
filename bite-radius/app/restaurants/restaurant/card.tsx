import React from "react";
import { Place } from "../../models/models";

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {place.displayName.text}
      </h2>
      <p className="text-gray-600 mb-1">{place.formattedAddress}</p>
      <p className="text-gray-600 mb-1">
        Phone: {place.internationalPhoneNumber}
      </p>
      <p className="text-gray-600 mb-1">Rating: {place.rating}</p>
      <a
        href={place.googleMapsUri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-3 block"
      >
        View on Google Maps
      </a>
      <p
        className={`mt-3 ${
          place.regularOpeningHours.openNow ? "text-green-500" : "text-red-500"
        }`}
      >
        {place.regularOpeningHours.openNow ? "Open Now" : "Closed"}
      </p>
    </div>
  );
};

export default PlaceCard;
