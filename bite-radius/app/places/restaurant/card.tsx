import React from "react";
import { Place } from "../../models/models";

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const isOpen = place.regularOpeningHours?.openNow;
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <i key={i} className="fas fa-star-half-alt text-yellow-400"></i>
        );
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400"></i>);
      }
    }

    return stars;
  };
  return (
    <div className="rounded-lg p-4 shadow-lg hover:scale-105 hover:shadow-orange-600 transition-transform">
      <div className="text-xl font-semibold text-gray-700 mb-2 flex items-center justify-between p-1">
        <p>{place.displayName.text}</p>
        {place.regularOpeningHours && (
          <p
            className={` ${
              isOpen ? "bg-green-600" : "bg-red-600"
            } ml-auto rounded-lg text-white text-xs p-1`}
          >
            {isOpen ? "Open Now" : "Closed"}
          </p>
        )}
      </div>
      <div className="text-gray-500 mb-1 flex justify-between p-2">
        <div>
          <img
            src="http://localhost/icons/loc.jpg"
            className="w-full h-full object-contain"
            alt="loc"
          />
        </div>
        <div>
          <p>{place.formattedAddress}</p>
        </div>
      </div>
      <div className="flex items-center mb-1"></div>
      <div className="flex space-x-2">
        <div className=" mt-2">{renderStars(place.rating)}</div>
        <a
          className="text-gray-600"
          href={`tel:${place.internationalPhoneNumber}`}
        >
          <img
            src="http://localhost/icons/call.jpg"
            className="h-9 w-9"
            alt="call"
          />
        </a>
        <a
          href={place.googleMapsUri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block"
        >
          <img
            src="http://localhost/icons/map.jpg"
            className="h-9 w-9"
            alt="map"
          />
        </a>
      </div>
    </div>
  );
};

export default PlaceCard;
